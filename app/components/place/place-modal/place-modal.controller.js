(function() {
	"use strict";

	angular
		.module('company-registry.place.place-modal')
		.controller('PlaceModalController', PlaceModalController);

	PlaceModalController.$inject = ['$uibModalInstance', 'newPlace'];
	function PlaceModalController($uibModalInstance, newPlace) {
		var pac = this;
		pac.place = newPlace;
		pac.ok = ok;
		pac.cancel = cancel;

		function ok() {
			$uibModalInstance.close(pac.place);
		}

		function cancel() {
			$uibModalInstance.dismiss();
		}
	}
})();