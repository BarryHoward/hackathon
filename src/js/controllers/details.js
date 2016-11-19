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

	// $scope.gotoUpdate = (post) => {
	// 	$scope.update = {};
	// 	$scope.update.id = post.id;
	// 	$scope.update.title = post.title;
	// 	$scope.update.destination_url = post.destination_url;
	// 	$scope.update.description = post.description;
	// 	// console.log($scope.update)
	// 	// console.log($scope)
	// 	$state.go("update")
	// }


}

detailsController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { detailsController };
