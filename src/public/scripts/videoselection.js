(function () {
    'use strict'

    app.controller("AniversariantesController",
        ["$scope", "$rootScope", "AniversariantesRepository", "ProfileService",
		    function ($scope, $rootScope, AniversariantesRepository, ProfileService) {
		        $scope = $scope || {};
				$scope.movies ;
				debugger;

		        function listVideos() {
		            debugger;
		            $http.get('http://localhost:8080/api/getMovies').
			        success(function (data) {
			            $scope.movies = data;
			        });
		        }
		        listVideos();
		    }

        ])
});