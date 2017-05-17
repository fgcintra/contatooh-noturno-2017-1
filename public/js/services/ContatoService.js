// public/js/services/ContatoService.js

angular.module('contatooh').factory('Contato', function($resource) {
    return $resource('contatos/:id');
});
