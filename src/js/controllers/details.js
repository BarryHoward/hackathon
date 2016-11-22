const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'

function detailsController ($scope, $http, $stateParams, $state, $location) {
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

	$scope.likePost = (post) => {
		var index = $scope.$parent.images.findIndex(function(element){
			return element.id === post.id;
		})
		console.log(index);
		var likeCount = post.likes+1;
		var likeObject = {likes: likeCount}
		$http.patch(SERVER + $stateParams.id, likeObject).then((resp) => {
			post.likes = likeCount;
			$scope.$parent.images[index].likes = likeCount;
		})
	}

	$scope.gotoUpdate = (post) => {
		var location = $location.path('update/' + post.id)
	}


}

detailsController.$inject = ['$scope', '$http', '$stateParams', '$state', '$location'];
export { detailsController };
