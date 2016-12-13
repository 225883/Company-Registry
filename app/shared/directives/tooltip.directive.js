(function() {
    "use strict";

    angular
        .module('company-registry.shared')
        .directive('crTooltip', crTooltip);

    crTooltip.$inject = ['$compile'];
    function crTooltip($compile) {
        return {
            restrict: "A",
            scope: {
                
                tooltipData: "="
            },
            link: function(scope, element, attrs){
                
                scope.hidden = true;
                
                var tooltipElement = angular.element("<div ng-hide='hidden'><span>{{tooltipData}}</span></div>");
                
                element.parent().append(tooltipElement);
                element
                .on('mouseenter', function() {
                    scope.hidden = false;
                    
                    scope.$digest(); 
                })
                .on('mouseleave', function() {
                    scope.hidden = true;
                    scope.$digest();
                });
                
                $compile(tooltipElement)(scope);
            }
        };
    }
})();