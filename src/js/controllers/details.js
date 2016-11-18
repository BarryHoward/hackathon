const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function detailsController ($scope, $http, $stateParams) {
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
	}

	$scope.deleteComment = (comment) => {
		$http.delete(SERVER + $stateParams.id + "/comments/" + comment.id).then((resp) => {
			$scope.comments = $scope.comments.filter((element) => {
				return (comment.id !== element.id);
			})

			console.log($scope.comments)
		});
	}
}

detailsController.$inject = ['$scope', '$http', '$stateParams'];
export { detailsController };
