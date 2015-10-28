(function() {

	var app = angular.module('PMA', []);

	app.controller('ProjectController', ['$scope', function($scope){

		$scope.isCreateProjectPg = true;
		$scope.isLocationPg = false;

		$scope.locationObj = {};

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
			
		};

		this.showLocationForm = function () {
			$scope.isCreateProjectPg = false;
			$scope.isLocationPg = true;
			$scope.locationObj = $scope.project.locations[0];
		};

		
		this.selectLocation = function (inputLocation) {
			$('input[type="submit"]').click(function(){
				$(this).css('color','orange');
			});
			for (var i = 0; i < $scope.project.locations.length; i++) {
				if ($scope.project.locations[i].locationName == inputLocation.locationName){
					$scope.locationObj = $scope.project.locations[i];
					break;
				}
			}
		};

		this.submitForm = function () {
			alert(JSON.stringify($scope.project));
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
