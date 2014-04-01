(function(){
"use strict";

    describe("Journal Controller", function () {
        var controller, scope, entries, entry1, entry2, entry3;
        var journalRepository = {
            storage: {},
            retrieveAll: function () {
                return this.storage;
            },
            saveAll: function (entries) {
                this.storage = entries;
            }
        };

        beforeEach(function(){
            entry1 = { date: Date().toString(), text: "Whatever" };
            entry2 = { date: Date().toString(), text: "Whichever" };
            entry3 = { date: Date().toString(), text: "Wherever" };
            entries = [entry1, entry2, entry3];
        });

        beforeEach(module("app"));

        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            controller = $controller("JournalController", {$scope: scope, $JournalRepository: journalRepository});
        }));

        it("Has entries", function () {
            expect(scope.entries).toBeDefined();
        });

        it("Has no entries on start", function () {
            expect(scope.entries.length).toBe(0);
        });

        it("Adds an entry", function(){
            scope.newEntryText = "Dear diary, what a day it's been!";
            var entryCount = scope.entries.length;

            scope.addEntry();

            expect(scope.entries.length).toEqual(entryCount + 1);
        });

        it("Delete removes an entry", function(){
            scope.entries = entries;
            var entryCount = scope.entries.length;

            scope.deleteEntry(entry2);

            expect(scope.entries.length).toEqual(entryCount -1);
        });

        it("Does not save empty entries", function() {
            scope.entries = entries;
            var entryCount = scope.entries.length;

            scope.newEntryText = "";
            scope.addEntry();

            expect(scope.entries.length).toEqual(entryCount);
        });

        it("Removes all entries when Clear() is called", function(){
            scope.clear();

            expect(scope.entries.length).toEqual(0);
        });

        it("Removes Entries with 'remove' set to true", function(){
            scope.entries = entries;
            var entryCount = scope.entries.length;

            entry2.remove = true;
            scope.saveAll();
            var remaining = scope.entries.length;

            expect(remaining).toEqual(entryCount - 1);
        });

        describe("the path", function () {
            it("should default to '/'", function () {
                expect(scope.location.path()).toBe("/");
            });
        });
    });
})();