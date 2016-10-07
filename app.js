/**
 * FileName:app.js
 * CreatedBy: Suyash
 * purpose : perform routing according to state
 */

/*create a module myApp and inject the services*/
var app = angular.module('myApp', ['ui.router', 'firebase', 'ngMaterial']);

/*use config to configure different states and pass services in config function*/
app.config(function($stateProvider, $urlRouterProvider,$mdThemingProvider) {

      $mdThemingProvider.theme('default')
      .backgroundPalette('brown').dark();
    /* initially app goes to the login page*/
    $urlRouterProvider.otherwise('/login');

    /* $stateProvider give different states*/
    $stateProvider

    /* configure the login state*/
        .state('login', {
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
    })
    /* configure the signup state*/
        .state('signup', {
        url: '/signup',
        templateUrl: 'template/signup.html',
        controller: 'signupCtrl'
    })
  });
