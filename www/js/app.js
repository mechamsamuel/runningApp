// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-logMiles.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.breakdowns', {
      url: '/breakdowns',
      views: {
        'tab-breakdowns': {
          templateUrl: 'templates/tab-breakdowns.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

      .state('tab.day', {
          url: '/breakdowns/day',
          views: {
              'tab-breakdowns': {
                  templateUrl: 'templates/day.html',
                  controller: 'dayBreakdown'
              }
          }
      })

      .state('tab.week', {
          url: '/breakdowns/week',
          views: {
              'tab-breakdowns': {
                  templateUrl: 'templates/week.html',
                  controller: 'weekBreakdown'
              }
          }

      })

      .state('tab.month', {
          url: '/breakdowns/month',
          views: {
              'tab-breakdowns': {
                  templateUrl: 'templates/month.html',
                  controller: 'monthBreakdown'
              }
          }
      })

      .state('tab.year', {
          url: '/breakdowns/year',
          views: {
              'tab-breakdowns': {
                  templateUrl: 'templates/year.html',
                  controller: 'yearBreakdown'
              }
          }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-averages.html',
          controller: 'AveragesTimeCtrl'
        }
      }


    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

