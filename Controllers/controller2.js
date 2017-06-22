var myApp = angular.module('myAppWithRoutes', ['ngRoute']);

myApp.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                    controller: SimpleController ,
                    templateUrl:'Partials/View1.html'
                }
            )
            .when('/view2',
                {
                    controller: SimpleController,
                    templateUrl: 'Partials/View2.html'
                }
            )
            .otherwise({redirectTo:'/'});

    }
);
var controllers = {};

controllers.SimpleController = function ($scope) {
    $scope.customers = [
                   { name: "Dave Jones", city: "Phoenix" }
                   , { name: "Jamie Riley", city: "Atlanta" }
                   , { name: "Heedy Walhin", city: "Chandler" }
                   , { name: "Thomas Winter", city: "Seattle" }
                    , { name: "Radha K", city: "Bangalor" }
    ];
    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    };
}
myApp.controller(controllers);