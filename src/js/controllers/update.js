const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function updateController ($scope, $http, $stateParams, $state, $location) {
  
  function init () {
    $http.get(SERVER + $stateParams.id).then((resp) => {
      $scope.update = {};
  		$scope.update.title = resp.data.title;
  		$scope.update.destination_url = resp.data.destination_url;
  		$scope.update.description = resp.data.description;

      $scope.valid ={};
      $scope.valid.name = true;
      $scope.valid.destination_url = true;
      $scope.valid.description= true;
      $scope.valid.submit = true;
      $scope.class={};
      $scope.class.submit = "big-eye";
    });

  }
  init();


  $scope.updateImage = (image) => {

    if ($scope.valid.submit){
      $http.patch(SERVER + $stateParams.id, image).then((resp) => {
        $location.path('details/' + $stateParams.id)
      });
    }
  };

    $scope.validName = (string) => {
    if (string){
      $scope.valid.name = true;
    } else {
      $scope.valid.name = false;
    }
    $scope.validAll();
  }

  $scope.validUrl = (string) => {
    if (string){
      $scope.valid.destination_url = true;
    } else {
      $scope.valid.destination_url = false;
    }
    $scope.validAll();
  }

  $scope.validDescription = (string) => {
    if (string){
      $scope.valid.description = true;
    } else {
      $scope.valid.description = false;
    }
    $scope.validAll();
  }

  $scope.validAll = function() {
      if ($scope.valid.name && $scope.valid.destination_url && $scope.valid.description){
        $scope.valid.submit = true;
        $scope.class.submit = "big-eye";
      } else {
        $scope.valid.submit = false;
        $scope.class.submit = "";
      }
      console.log($scope.valid.submit, $scope.class.submit)
  }

};

updateController.$inject = ['$scope', '$http', '$stateParams', '$state', '$location'];
export { updateController };
