angular.module('Save_With_Ray', ['ui.router'])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

		$urlRouterProvider.otherwise('home');
	}])

.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])

.controller('PostsCtrl', [
	'$scope',
	'$stateParams',
	'posts',
	$scope.post = posts.posts[$stateParams.id];
	function($scope, $stateParams, posts){

	}]);

.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){

		$scope.posts = posts.posts;

		$scope.addPost = function(){

			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
				comments: [
				{author: 'Joe', body: 'Cool post!', upvotes: 0},
				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
				]
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
	}]);

