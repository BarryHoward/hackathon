const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function detailsController ($scope, $http, $stateParams) {
  $scope.image = {};

  function init () {
    $http.get(SERVER + $stateParams.id).then((resp) => {
      $scope.image = resp.data;
    });
  };
  init();
}

detailsController.$inject = ['$scope', '$http', '$stateParams'];
export { detailsController };
