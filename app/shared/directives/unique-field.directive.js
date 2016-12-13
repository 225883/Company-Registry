(function() {
	"use strict";

	angular
		.module('company-registry.shared')
		.directive('uniqueField', uniqueField);

	uniqueField.$inject = ['$q', '$parse'];
	function uniqueField($q, $parse) {
		var uniqueFieldDirective = {
			restrict: 'A',
			
			require: ['ngModel','?^busyIndicator'],
			link: function(scope, elem, attrs, ctrls) {
				var ngModelCtrl = ctrls[0];
				var busyIndicatorCtrl = ctrls[1];

				
				var expfn = $parse(attrs.uniqueField);

				ngModelCtrl.$asyncValidators.uniqueField = function(value) {
					if(!value || value === '') return $q.when(true);
					
					return expfn(scope, {'value':value}).then(function(data) {
						if(data.count > 0) {
							return $q.reject('exists');
						} else {
							return true;
						};
					});
				};

				if (busyIndicatorCtrl) {
	                scope.$watch(function () { return ngModelCtrl.$pending; }, function (newValue) {
	                    if (newValue) busyIndicatorCtrl.show();
	                    else busyIndicatorCtrl.hide();
	                });
	            }
			}
		};
		return uniqueFieldDirective;
	}
})();