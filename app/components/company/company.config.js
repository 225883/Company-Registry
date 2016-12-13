(function() {
	angular
		.module('company-registry.company')
		.run(run);

	run.$inject = ['$rootScope', '$window'];
	function run($rootScope, $window) {
		
		$rootScope.$on('$stateChangeError', errorFunction);

		function errorFunction(event, toState, toParams, fromState, fromParams) {
			var error = "An error has occured!\n";

			if(toState.name == "main.companyEdit") {
				error += "The company with the PIB " + toParams.id + " doesn't exist!";
			}
			$window.alert(error);
		}
	}
})();