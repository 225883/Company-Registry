(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.factory('Company', Company);

	Company.$inject = ['$resource'];
	function Company($resource) {
		var collectionName = "companies";
		var companyService = $resource("http://localhost:3000/api/:collectionName/:id",
			{id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });

		angular.extend(companyService.prototype, {
			$saveOrUpdate: function(successCallback) {
				if(!this._id) {
					this.$save(successCallback);
				} else {
					this.$update(successCallback);
				}
			}
		});
		return companyService;
	}
})();