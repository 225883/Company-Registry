(function() {
	"use strict";

	angular
		.module('company-registry.shared')
		.controller('NoDeleteModalController', NoDeleteModalController);

	NoDeleteModalController.$inject = ['$uibModalInstance'];
	function NoDeleteModalController($uibModalInstance) {
		var ndmc = this;
		ndmc.dismiss = $uibModalInstance.dismiss;
	}
})();