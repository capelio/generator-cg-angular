angular.module('<%= _.slugify(appname) %>', ["ui.bootstrap","ui"]);

angular.module('<%= _.slugify(appname) %>').config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    /* Add New Routes Above */
    otherwise({redirectTo:'/home'});

}]);

angular.module('<%= _.slugify(appname) %>').run(['$rootScope', function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

}]);
