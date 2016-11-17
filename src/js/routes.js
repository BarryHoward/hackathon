function routerConfig ($stateProvider , $urlRouterProvider) {





$urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$arg'];
export { routerConfig };
