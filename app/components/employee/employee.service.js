(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.factory('Employee', Employee);

	Employee.$inject = ['$resource'];
	function Employee($resource) {
		var collectionName = "employees";
		var employeeService = $resource("http://localhost:3000/api/:collectionName/:id",
			{id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });

		
		angular.extend(employeeService.prototype, {
			$saveOrUpdate: function(successCallback) {
				if(!this._id) {
					this.$save(successCallback);
				} else {
					this.$update(successCallback);
				}
			}
		});
		return employeeService;
	}
})();