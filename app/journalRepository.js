// Service to persist and retrieve Journal Entries from localStorage
app.factory("JournalRepository", function () {
    "use strict";

    var STORAGE_ID = "journal-entries";

    return {

        retrieveAll: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || "[]");
        },

        saveAll: function (entries) {
            var blob = JSON.stringify(entries);
            localStorage.setItem(STORAGE_ID, blob);
        },

        clear: function () {
            localStorage.clear(STORAGE_ID);
            this.saveAll([]);
        }
    };
});
