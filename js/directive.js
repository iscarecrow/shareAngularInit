var huginDirective = angular.module('huginDirective', []);

//  wrong
huginDirective.directive('huginDirective', function () {
    return {
        template: '<a class="btn">Toggle me!</a>',
        link: function (scope, element, attrs) {
            var on = false;
            $(element).click(function () {
                if (on) {
                    $(element).removeClass('active');
                } else {
                    $(element).addClass('active');
                }
                on = !on;
            });
        }
    };
});

// right
huginDirective.directive('huginDirective', function () {
    return {
        scope: true,
        template: '<a class="btn" ng-class="{active: on}" ng-click="toggle()">Toggle me!</a>',
        link: function (scope, element, attrs) {
            scope.on = false;
            scope.toggle = function () {
                scope.on = !$scope.on;
            };
        }
    };
});