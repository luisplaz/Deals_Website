angular.module('SaveWithRay')
.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){

		$scope.posts = posts.posts;

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
	}]);