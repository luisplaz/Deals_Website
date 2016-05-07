angular.module('saveray')
.controller('PostsCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	$scope.post = posts.posts[$stateParams.id];
	function($scope, $stateParams, posts){

	}]);