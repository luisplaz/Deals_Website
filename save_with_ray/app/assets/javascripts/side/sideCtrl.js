angular.module('SaveWithRay')
.controller('SideCtrl', [
	'$scope',
	'posts',
	function($scope, posts){

		$scope.posts = posts.posts;

		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') { return; }
			posts.create({
				title: $scope.title,
				body: $scope.body,
				link: $scope.link,
			});
			$scope.title = '';
			$scope.link = '';
			$scope.body = '';
		};
	}]);