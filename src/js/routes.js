function routerConfig ($stateProvider , $urlRouterProvider) {

  $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'templates/home.tpl.html',
       controller: 'homeController'
     })
     .state('add', {
       url: '/add',
       templateUrl: 'templates/add.tpl.html',
       controller: 'addController'
     })
     .state('details', {
       url: '/details/:id',
       templateUrl: 'templates/details.tpl.html',
       controller: 'detailsController'
     });


     $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
