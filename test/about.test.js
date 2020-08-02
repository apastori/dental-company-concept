const supertest = require("supertest");
const assert = require("assert");
const app = require("../index.js");
const listViews = require("../config/viewList.js");
const toolbox = require("../toolBox.js");

describe("GET About", function() {
    let listViewOptions = ["About", "AboutUs"];
    let viewExists = toolbox.checkElementListAnotherList(listViews, listViewOptions, 2);
    if (viewExists == null) throw Error("Did not find View");
    it("status code of request should be 200", function(done) {
        supertest(app)
            .get(`/${listViewOptions[viewExists]}/`)
            .expect(200)
            .end(function(err, res) {
                if (err) done(err);
                done();
            });
    });
});