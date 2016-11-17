const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function update ($scope, $http, $state) {

  $scope.updateImage = (image) => {
    $http.patch(SERVER, image).then((resp) => {
      $state.go('home');
    });
  };

};

addController.$inject = ['$scope', '$http', '$state'];
export { addController };
