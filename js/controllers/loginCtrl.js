angular.module('cardapioADSApp')

.controller('loginCtrl',function($scope,$location) {

    $scope.usuario = {
        login: null,
        senha: null
    }

    var usuario= {
        login:'admin',
        senha:'admin'

    }

    $scope.acessarSistema = function (usuarioInformado) {
            //console.log(usuarioInformado.login);
            if ((usuario.login == usuarioInformado.login) & (usuario.senha == usuarioInformado.senha)){
                console.log('Usuario correto');
                $location.path('/home');
            }else{
                console.log('Usuário ou senha inválidos');
            }
    }

});