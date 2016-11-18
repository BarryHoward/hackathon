const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function detailsController ($scope, $http, $stateParams, $state) {
	$scope.image = {};

	function init () {
		$http.get(SERVER + $stateParams.id).then((resp) => {
	    	$scope.image = resp.data;
		});

		$http.get(SERVER + $stateParams.id + "/comments").then((resp) => {
	    	$scope.comments = resp.data;
		});
	};
	init();

	$scope.addComment = (text) => {
		let comment = {
			content: text
		}
		$http.post(SERVER + $stateParams.id + "/comments", comment).then((resp) => {
	    	$scope.comments.push(resp.data);
		});

		$scope.comment.new = "";
	}

	$scope.deleteComment = (comment) => {
		$http.delete(SERVER + $stateParams.id + "/comments/" + comment.id).then((resp) => {
			$scope.comments = $scope.comments.filter((element) => {
				return (comment.id !== element.id);
			})
		});
	}

	$scope.deletePost = (post) => {
		$http.delete(SERVER + $stateParams.id).then((resp) => {
			console.log($scope.images);
			$scope.images = $scope.images.filter((element) => {
				return ($stateParams.id !== element.id);
			})

			$state.go("home");
		})
	}
}

detailsController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { detailsController };
