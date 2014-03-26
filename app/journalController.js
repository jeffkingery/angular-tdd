/* global journalApp:true */

journalApp.controller('JournalController', function($scope, $location, JournalRepository){
    $scope.location = $location;
    var entries = $scope.entries = JournalRepository.retrieveAll();
    $scope.newEntryText = '';

    if ($location.path() === ''){
        $location.path('/');
    }

    $scope.testEntries = [
        {date: Date(), text: 'entry1'},
        {date: Date(), text: 'entry2'},
        {date: Date(), text: 'entry3'},
        {date: Date(), text: 'entry4'}
    ];

    $scope.addEntry = function () {
        var newEntryText = $scope.newEntryText.trim();

        if (!newEntryText.length){
            return;
        }

        entries.push({
            date: new Date(),
            text: newEntryText
        });

        JournalRepository.saveAll(entries);

        $scope.newEntryText = '';
    };

    $scope.deleteEntry = function (entryToDelete){
        entries.splice(entries.indexOf(entryToDelete));
        JournalRepository.saveAll(entries);
    };

    $scope.$watch('entries', function(newValue, oldValue){
       if (newValue !== oldValue){
           JournalRepository.saveAll(entries);
       }
    });
});