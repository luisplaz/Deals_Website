angular.module('saveray')
.factory('posts', [function(){
	var o = {
		posts: []
	};
	return o;
}])