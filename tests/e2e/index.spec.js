describe("index", function () {
    "use strict";

    beforeEach(function () {
        browser.get("/angular-tdd/app/index.html#/");
    });

    it("should have 'AngularJS Journal' in the Title", function () {
        expect(browser.getTitle()).toBe("AngularJS Journal");
    });

    it("should have an input or textarea for new entries", function () {
        var newEntryBox = element(by.model("newEntryText"));

        expect(newEntryBox).toBeDefined();
    });
});