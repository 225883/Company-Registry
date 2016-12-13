(function() {
	'use strict';

	angular
		.module('company-registry.shared')
		.factory('deleteModal', deleteModal);

	deleteModal.$inject = ['$uibModal'];
	function deleteModal($uibModal) {
		return {
			open: openDeleteModal
		};

		function openDeleteModal(entity) {
			var modalInstance = $uibModal.open({
				animation: true,
				resolve: {
					entity: function() {
						return entity;
					}
				},
				templateUrl: 'app/shared/delete-modal/delete-modal.html',
				controller: 'DeleteModalController',
				controllerAs: 'dmc'
			});

			return modalInstance.result.then(function(flag) {
				return flag;
			});
		}
	}
})();