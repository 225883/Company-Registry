(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.controller('CompanyController', CompanyController);

	CompanyController.$inject = ['$scope', '$location', 'Company', 'placeModal', 'deleteModal', 'company', 'places', 'title', '$q'];
	function CompanyController($scope, $location, Company, placeModal, deleteModal, company, places, title, $q) {
		var cc = this;

		cc.places = places.results;
		cc.company = company;
		if(!cc.company.headquarters) {
			cc.company.headquarters = cc.places[0].name; 
		}
		cc.companyCopy = angular.copy(cc.company);
		cc.title = title;
		
		if(cc.company._id) {
			cc.disableRevert = true;
			$scope.$watch(function() {
				return cc.company;
			}, function(newVal, oldVal) {
				if(!angular.equals(newVal, oldVal)) {
					cc.disableRevert = angular.equals(cc.company, cc.companyCopy);
				}
			}, true);
		}

		cc.uniqueField = function(value) {
			if(value === cc.companyCopy.pib) return $q.when(true);
			return Company.get({"filter": {"pib":value}}).$promise;
		};

		cc.newPlace = function() {
			placeModal.open().then(function(data) {
				cc.places.push(data);
				cc.company.headquarters = data.name;
			});
		};

		cc.revertChanges = function() {
			cc.company = angular.copy(cc.companyCopy);
		};

		cc.save = function() {
			cc.company.$saveOrUpdate(success);
		};

		cc.remove = function() {
			deleteModal.open("company").then(function(flag) {
				if(flag) {
					cc.company.$delete(success);
				}
			});
		};

		function success() {
			$location.path('/company');
		}
	}
})();