const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'


function addController ($scope, $http, $state) {
  $scope.addImage = (image) => {
    $http.post(SERVER, image).then((resp) => {
      $state.go('home');
    });
  };

};

addController.$inject = ['$scope', '$http', '$state'];
export { addController };
