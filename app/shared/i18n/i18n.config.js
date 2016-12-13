(function() {
	"use strict";
	
	angular
		.module('company-registry.i18n')
		.config(config);

	config.$inject = ['$translateProvider', 'crTranslations'];
	function config($translateProvider, crTranslations) {
		$translateProvider.useSanitizeValueStrategy('escape');
		
		$translateProvider.translations('sr-latn', crTranslations["sr-latn"]);
		$translateProvider.translations('en', crTranslations.en);
		$translateProvider.preferredLanguage('en');
	}
})();