(function(){
    "use strict";

    describe("Journal Repository", function () {
        var repository, entries, entry1, entry2, entry3;

        beforeEach(function(){
            entry1 = { date: Date().toString(), text: 'Whatever' };
            entry2 = { date: Date().toString(), text: 'Whichever' };
            entry3 = { date: Date().toString(), text: 'Wherever' };
            entries = [entry1, entry2, entry3];
        });

        beforeEach(module('journalApp'));

        beforeEach(inject(function($injector){
            repository = $injector.get('JournalRepository');
        }));

        it('Add adds an Entry', function(){
            repository.saveAll([entries]);

            var result = repository.retrieveAll();

            expect(JSON.stringify(result)).toContain(JSON.stringify(entry1));
            expect(JSON.stringify(result)).toContain(JSON.stringify(entry2));
            expect(JSON.stringify(result)).toContain(JSON.stringify(entry3));
        });

        it('Clear removes all Entries', function(){
            repository.clear();

            var result = repository.retrieveAll();

            expect(result.length).toEqual(0);
        });

        it("Has retrieveAll Method", function () {
            var result = repository.retrieveAll;

            expect(result).toBeDefined();
        });

        it("Retrieves Journal Entries", function () {
            var entryText = 'Dear Diary, what a day it"s been!';
            var journalEntry = {'text': entryText};
            repository.saveAll([journalEntry]);

            var result = repository.retrieveAll();

            repository.clear();
            expect(result[0].text).toBe(entryText);
        });
    });
})();