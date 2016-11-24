const SERVER = 'https://hackathon-backend.herokuapp.com/posts/'


function addController ($scope, $http, $state) {

	$scope.valid ={};
	$scope.class={};
	$scope.class.submit = "";


  $scope.addImage = (image) => {
  	if ($scope.valid.submit){
	    $http.post(SERVER, image).then((resp) => {
	      $state.go('home');
	    });
	}
  };

  $scope.validName = (string) => {
  	if (string){
  		$scope.valid.name = true;
  	} else {
  		$scope.valid.name = false;
  	}
  	$scope.validAll();
  }

  $scope.validUrl = (string) => {
  	if (string){
  		$scope.valid.destination_url = true;
  	} else {
  		$scope.valid.destination_url = false;
  	}
  	$scope.validAll();
  }

  $scope.validDescription = (string) => {
  	if (string){
  		$scope.valid.description = true;
  	} else {
  		$scope.valid.description = false;
  	}
   	$scope.validAll();
  }

  $scope.validAll = function() {
  		if ($scope.valid.name && $scope.valid.destination_url && $scope.valid.description){
  			$scope.valid.submit = true;
  			$scope.class.submit = "big-eye"
  		} else {
  			$scope.valid.submit = false;
  			$scope.class.submit = "";
  		}
  }

};

addController.$inject = ['$scope', '$http', '$state'];
export { addController };
