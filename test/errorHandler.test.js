const supertest = require("supertest");
const assert = require("assert");

function triggerError() {
    var someObject = {};
    return someObject.someMethod();
}

describe("errorHandler middleware", function() {
    it("throws a type error", function() {
        assert.throws(() => triggerError(), TypeError);
    });
});