const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function updateController ($scope, $http, $stateParams, $state) {
  
  function init () {
    $http.get(SERVER + $stateParams.id).then((resp) => {
    	console.log(resp)

    	$scope.update = {};
		$scope.update.title = resp.data.title;
		$scope.update.destination_url = resp.data.destination_url;
		$scope.update.description = resp.data.description;

    });

  }
  init();


  $scope.updateImage = (image) => {
    $http.patch(SERVER + $stateParams.id, image).then((resp) => {
      $state.go('home');
    });
  };

};

updateController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { updateController };
