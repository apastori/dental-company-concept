const supertest = require("supertest");
const app = require("../index.js");
const listViews = require("../config/viewList.js");
const toolbox = require("../toolBox.js");

var data = {
    name: 'Alfonso',
    lastname: 'Pastori',
    email: 'alfonso.pastori@gmail.com',
    phone: '0984568943',
};

describe("POST Contact", function() {
    let listViewOptions = ["Contact", "Form"];
    let viewExists = toolbox.checkElementListAnotherList(listViews, listViewOptions, 2);
    if (viewExists == null) throw Error("Did not find View");
    it("status code of request should be 200", function(done) {
        supertest(app)
            .post(`/${listViewOptions[viewExists]}/`)
            .send(data)
            .expect(302)
            .expect('Location', '/Contact/')
            .end(function(err, res) {
                if (err) done(err);
                done();
            });
    });
});