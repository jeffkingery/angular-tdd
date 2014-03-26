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
            entry1 = { date: Date().toString(), text: 'Whatever' };
            entry2 = { date: Date().toString(), text: 'Whichever' };
            entry3 = { date: Date().toString(), text: 'Wherever' };
            entries = [entry1, entry2, entry3];
        });

        beforeEach(module('journalApp'));

        beforeEach(inject(function($rootScope, $controller){
            scope = $rootScope.$new();
            controller = $controller('JournalController', {$scope: scope, $JournalRepository: journalRepository});
        }));

        it("Has entries", function () {
            expect(scope.entries).toBeDefined();
        });

        it('Has no entries on start', function () {

            expect(scope.entries.length).toBe(0);
        });

        it("Adds an entry", function(){

            scope.newEntryText = 'Higamous, hogamous.';
            var entryCount = scope.entries.length;

            scope.addEntry();

            expect(scope.entries.length).toEqual(entryCount + 1);
        });

        it('Delete Removes an Entry', function(){
            var entryCount = scope.entries.length;

            scope.deleteEntry(entry2);
            var remaining = scope.entries.length;

            expect(remaining).toEqual(entryCount - 1);
        });

        describe('the path', function () {
            it('should default to "/"', function () {
                expect(scope.location.path()).toBe('/');
            });
        });
    });
})();