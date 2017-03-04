angular.module('contactApp', [])
  .controller('AppCtrl', function($scope, $http) {
    console.log("Hello from Angular controller");

    var resfresh = function() {
      $http.get('/contactlist').then(function successCallback(response){
          console.log("Got data from server");
          $scope.contactlist = response['data'];
          $scope.contact = {};
      });
    }

    resfresh();

    $scope.add = function() {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).then(function successCallback(response) {
        console.log(response);
        resfresh();
      });
    };

    $scope.delete = function(id) {
      console.log("Delete item with ID:" + id);
      $http.delete('/contactlist/' + id);
      resfresh();
    };

    $scope.edit = function(id) {
      console.log("Update: " + id);
      $http.get('/contactlist/' + id).then(function successCallback(response) {
        console.log(response['data']);

        //NOTE: var jsonObject = JSON.parse(text);
        $scope.contact = JSON.parse(response['data']);
      });
    };

    $scope.update = function() {
      var id = $scope.contact._id;
      console.log("Update: " + id);
      $http.put('/contactlist/' + id, $scope.contact).then(function successCallback(response) {
        resfresh();
      });
    };


});
