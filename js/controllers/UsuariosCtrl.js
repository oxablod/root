angular.module('cardapioADSApp')

.controller('UsuariosCtrl',function($scope) {

    $scope.usuario = {
        id: null,
        nome: null,
        login: null,
        senha: null
    }

    $scope.listaUsuarios = [];

    $scope.salvar = function(usuarioCadastrado){
        $scope.listaUsuarios.push(usuarioCadastrado);
        delete $scope.usuario;
        $('#cadastroUsuarioModal').modal('hide');
    }    

});