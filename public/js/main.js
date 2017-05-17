// public/js/main.js

angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider) {

    //$httpProvider.interceptors.push('meuInterceptor');
    
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    $routeProvider.when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });

    /**
     * item da prova
     */
    $routeProvider.when('/ajuda', {
        templateUrl: 'partials/ajuda.html'
        //controller: 'AjudaController'
    });

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'    
    });

    $routeProvider.otherwise({redirectTo: '/contatos'});

});
