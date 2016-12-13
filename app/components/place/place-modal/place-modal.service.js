(function() {
	'use strict';

	angular
		.module('company-registry.place.place-modal')
		.factory('placeModal', placeModal);

	placeModal.$inject = ['Place', '$uibModal'];
	function placeModal(Place, $uibModal) {
		return {
			open: openPlaceModal
		};

		function openPlaceModal() {
			var modalInstance = $uibModal.open({
				animation: true,
				resolve: {
					newPlace: function() {
						return new Place();
					}
				},
				templateUrl: 'app/components/place/place-modal/place-modal.html',
				controller: 'PlaceModalController',
				controllerAs: 'pac'
			});

			return modalInstance.result.then(function(newPlace) {
				return newPlace.$save(function(data) {
					return data;
				});
			});
		}
	}
})();