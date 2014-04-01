/* global app:true */

app.controller("JournalController", function($scope, $location, JournalRepository){

    $scope.entries = JournalRepository.retrieveAll();

    if ($location.path() === ""){
        $location.path("/");
    }

    $scope.location = $location;

    $scope.addEntry = function() {
        if ($scope.newEntryText === ""){
            return;
        }

        $scope.entries.push({
            text: $scope.newEntryText,
            date: Date()
        });
        $scope.newEntryText = "";
        JournalRepository.saveAll($scope.entries);
    };

    $scope.saveAll = function() {
        var allEntries = $scope.entries;
        $scope.entries = [];
        angular.forEach(allEntries, function(entry){
            if (!entry.remove)
            {
                $scope.entries.push(entry);
            }
        });
        JournalRepository.saveAll($scope.entries);
    };

    $scope.clear = function (){
        $scope.entries = [];
        JournalRepository.saveAll($scope.entries);
    };

    $scope.deleteEntry = function (entryToDelete){
        entryToDelete.remove = true;
        $scope.saveAll($scope.entries);
    };

//    $scope.$watch("entries", function(newValue, oldValue){
//        if (newValue !== oldValue){
//            JournalRepository.saveAll(entries);
//        }
//    }, true);
});