(function() {
	'use strict';

	angular
		.module('company-registry.shared')
		.factory('noDeleteModal', noDeleteModal);

	noDeleteModal.$inject = ['$uibModal'];
	function noDeleteModal($uibModal) {
		return {
			open: openNoDeleteModal
		};

		function openNoDeleteModal() {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'app/shared/delete-modal/no-delete-modal.html',
				controller: 'NoDeleteModalController',
				controllerAs: 'ndmc'
			});
		}
	}
})();