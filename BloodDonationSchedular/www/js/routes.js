angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.welcomeToBloodDonor', {
    url: '/Welcome to Blood Donor',
    views: {
      'tab1': {
        templateUrl: 'templates/welcomeToBloodDonor.html',
        controller: 'welcomeToBloodDonorCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.scheduleAppoinment'
      2) Using $state.go programatically:
        $state.go('tabsController.scheduleAppoinment');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Schedule
      /page1/tab3/Schedule
  */
  .state('tabsController.scheduleAppoinment', {
    url: '/Schedule',
    views: {
      'tab2': {
        templateUrl: 'templates/scheduleAppoinment.html',
        controller: 'scheduleAppoinmentCtrl'
      },
      'tab3': {
        templateUrl: 'templates/scheduleAppoinment.html',
        controller: 'scheduleAppoinmentCtrl'
      }
    }
  })

  .state('tabsController.editProfile', {
    url: '/Edit Profile',
    views: {
      'tab3': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/Profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.success'
      2) Using $state.go programatically:
        $state.go('tabsController.success');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Success
      /page1/tab3/Success
  */
  .state('tabsController.success', {
    url: '/Success',
    views: {
      'tab2': {
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
      },
      'tab3': {
        templateUrl: 'templates/success.html',
        controller: 'successCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.searchItem'
      2) Using $state.go programatically:
        $state.go('tabsController.searchItem');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Search Item
      /page1/tab3/Search Item
  */
  .state('tabsController.searchItem', {
    url: '/Search Item',
    views: {
      'tab2': {
        templateUrl: 'templates/searchItem.html',
        controller: 'searchItemCtrl'
      },
      'tab3': {
        templateUrl: 'templates/searchItem.html',
        controller: 'searchItemCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.searchResult'
      2) Using $state.go programatically:
        $state.go('tabsController.searchResult');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/Search Result
      /page1/tab3/Search Result
  */
  .state('tabsController.searchResult', {
    url: '/Search Result',
    views: {
      'tab2': {
        templateUrl: 'templates/searchResult.html',
        controller: 'searchResultCtrl'
      },
      'tab3': {
        templateUrl: 'templates/searchResult.html',
        controller: 'searchResultCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/Login',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/Signup',
    views: {
      'tab1': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Welcome to Blood Donor')

  

});