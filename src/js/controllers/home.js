const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function homeController ($scope, $http) {
  $scope.images = [];

  function init () {
    $http.get(SERVER).then((resp) => {
      $scope.images = resp.data;
    });
  }

  init();

};

homeController.$inject = ['$scope', '$http'];
export { homeController };
