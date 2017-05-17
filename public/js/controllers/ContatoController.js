// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController',	function($scope, $routeParams, /*$resource,*/ Contato) {

    console.log($routeParams.contatoId);

    $scope.mensagem = {};

    if($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId},
            function(contato) {
                $scope.contato = contato;
            },
            function(erro) {

                console.log(erro);

                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato',
                    class: 'danger'
                };

            }
        );
    } else {
        $scope.contato = new Contato();
    }

    $scope.salvaContato = function() {
        $scope.contato.$save().then(
			function() {
				$scope.mensagem = {
					texto: 'Contato salvo com sucesso.',
					class: 'success'
				};
				$scope.contato = new Contato();
			},
			function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível salvar o contato.',
					class: 'danger'
                };
			}   
		);
    };

    Contato.query(function(contatos) {
        $scope.contatos = contatos;
    });

});
