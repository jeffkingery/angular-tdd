/*global journalApp */

// Service to persist and retrieve Journal Entries from localStorage
journalApp.factory('JournalRepository', function () {

    var STORAGE_ID = 'journal-entries';

    return {
        clear: function () {
            localStorage.clear();
        },

        retrieveAll: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        saveAll: function (entries) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(entries));
        }
    };
});
