angular.module('cardapioADSApp',['ngRoute'])

.config(function($routeProvider){
    
    $routeProvider.when('/', {
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    }).when('/home',{
        templateUrl:'view/home.html',
        controller:'HomeCtrl'
    }).when('/pedidos',{
        templateUrl:'view/pedidos.html',
        controller:'PedidosCtrl'
    }).when('/produtos',{
        templateUrl:'view/produtos.html',
        controller:'ProdutosCtrl'
    }).when('/clientes',{
        templateUrl:'view/clientes.html',
        controller:'ClientesCtrl'
    }).when('/usuarios',{
        templateUrl:'view/usuarios.html',
        controller:'UsuariosCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/'});

});