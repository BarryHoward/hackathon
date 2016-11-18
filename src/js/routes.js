function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('home', {
       // abstract: true,
       url: '/',
       templateUrl: 'templates/home.tpl.html',
       controller: 'homeController'
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
     });


     $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
