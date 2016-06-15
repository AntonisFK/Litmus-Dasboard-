var myApp = angular.module('myApp', [
'ngRoute',
'ngAnimate',
'ui.bootstrap',
]);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'Dashboard/home.html',
      controller: 'dashboardController',
      access: {restricted: true}
    })
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'singup/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })

});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});