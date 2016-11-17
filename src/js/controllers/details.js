const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function detailsController ($scope, $http, $stateParams) {
  $scope.image = {};

  function init () {
    console.log("tried to initialize details");
    $http.get(SERVER).then((resp) => {
      $scope.image = resp.data;
    });
  };

  init();
}

detailsController.$inject = ['$scope', '$http'];
export { detailsController };
