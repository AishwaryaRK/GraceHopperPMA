(function() {

	var app = angular.module('Dashboard', []);

	app.controller('FooterController', ['$scope', function($scope){
		$scope.copyrightLabel = new Date().getFullYear() + " PanDevs";
	}]);

})();
