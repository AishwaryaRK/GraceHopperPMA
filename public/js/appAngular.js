(function() {

	var app = angular.module('PMA', []);

	app.controller('ProjectController', ['$scope', function($scope){

		$scope.isCreateProjectPg = true;
		$scope.isLocationPg = false;

		alert("in controller");
		$scope.project = {
			name : null,
			head : null,
			startDate : null,
			endDate : null,
			locations : [],
			tasks : []
		};

		var location;
		this.addLocation = function () {
			var locationEle = {
				locationName : this.location,
				locationHead : null,
				totalFund : null,
				resources : []
			};
			$scope.project.locations.push(locationEle);
			this.location = null;
		};

		var task;
		this.addTask = function () {
			var taskEle = {
				taskName : this.task,
				isDone : false
			};
			$scope.project.tasks.push(taskEle);
			this.task = null;
			alert(JSON.stringify($scope.project));
		};

		this.showLocationForm = function () {
			$scope.isCreateProjectPg = false;
			$scope.isLocationPg = true;
		};

		$scope.locationObj = $scope.locations[0];
		this.selectLocation = function (inputLocation) {
			for (var i = 0; i < $scope.locations.length; i++) {
				if ($scope.locations[i].locationName == inputLocation.locationName){
					$scope.locationObj = $scope.locations[i];
					break;
				}
			}
		};

		// var fund;
		// this.addFund = function (inputLocation) {
		// 	for (var i = 0; i < $scope.locations.length; i++) {
		// 		if ($scope.locations[i].location == inputLocation){
		// 			$scope.locations[i]["fund"].push(this.fund);
		// 			alert("fund = "+this.fund);
		// 			alert($scope.locations)
		// 			break;
		// 		}
		// 	}
		// 	this.fund = null;
		// };

	}]);

app.controller('FooterController', ['$scope', function($scope){
	$scope.copyrightLabel = new Date().getFullYear() + " PanDevs";
}]);

})();
