//var app = angular.module('myApp', []).
//           controller('simpleController', function ($scope) {
//               $scope.customers = [
//                   { name: "Dave Jones", city: "Phoenix" }
//                   , { name: "Jamie Riley", city: "Atlanta" }
//                   , { name: "Heedy Walhin", city: "Chandler" }
//                   , { name: "Thomas Winter", city: "Seattle" }
//                    , { name: "Radha K", city: "Bangalor" }
//               ];
//           });

var myApp = angular.module('myApp', []);
var controllers = {};
controllers.SimpleController = function ($scope) {
    $scope.customers = [
                   { name: "Dave Jones", city: "Phoenix" }
                   , { name: "Jamie Riley", city: "Atlanta" }
                   , { name: "Heedy Walhin", city: "Chandler" }
                   , { name: "Thomas Winter", city: "Seattle" }
                    , { name: "Radha K", city: "Bangalor" }
               ];
}
myApp.controller(controllers);