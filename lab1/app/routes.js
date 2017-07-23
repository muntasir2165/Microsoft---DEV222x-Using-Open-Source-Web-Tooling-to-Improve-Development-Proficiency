angular.module('app')
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'home.template.html'
  })
  .when('/about', {
    templateUrl: 'about.template.html'
  })
});