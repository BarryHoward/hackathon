function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'templates/home.tpl.html',
       controller: 'homeController'
     })
     .state('about', {
        url: '/about',
        templateUrl: 'templates/about.tpl.html'
      })
     .state('home.details', {
       url: 'details/:id',
       templateUrl: 'templates/details.tpl.html',
       controller: 'detailsController'
     })
    .state('add', {
       url: '/add',
       templateUrl: 'templates/add.tpl.html',
       controller: 'addController'
     })
    .state('update', {
      url: '/update/:id',
      templateUrl: 'templates/update.tpl.html',
      controller: 'updateController'
    });


     $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
