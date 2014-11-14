(function () {
	'use strict'

	app.controller("videoselectioncontroller",
		["$scope", "$rootScope", "$http",
		function ($scope, $rootScope, $http) {
			$scope = $scope || {};
			$scope.movies;
			debugger;

			function _listVideos() {
				debugger;
				$http.get('http://localhost:8080/api/getMovies').
				success(function (data) {
					$scope.movies = data;
				}
				);
			}

			_listVideos();

		}]);
})();