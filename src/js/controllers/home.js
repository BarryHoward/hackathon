const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function homeController ($scope, $http, $state) {
  $scope.images = [];

  function init () {
    $http.get(SERVER).then((resp) => {
      $scope.images = resp.data;
    });
  }
  init();

  
  $scope.deletePost = (post) => {
		$http.delete(SERVER + post.id).then((resp) => {
			$scope.images = $scope.images.filter((element) => {
				return (post.id !== element.id);
			})
			$state.go("home");
		})
	}

};

homeController.$inject = ['$scope', '$http', '$state'];
export { homeController };
