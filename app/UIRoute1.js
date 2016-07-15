var myUIRoute = angular.module('MyUIRoute', ['ui.router', 'ngAnimate']);
myUIRoute.controller("asds",function($scope){
 $scope.items = ["A", "List", "Of", "Items"];
 alert("1");
})
myUIRoute.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "tpls1/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "tpls1/state1.list.html",
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "tpls1/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "tpls1/state2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        });
});
