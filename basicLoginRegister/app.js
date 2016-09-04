var myApp=angular.module("myApp",['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when("/",{
       templateUrl:"pages/login.html",
       controller:"loginController" 
    })
    .when("/welcome",{
       templateUrl:"pages/welcome.html",
       controller:"welcomeController"
    })
    .when("/error",{
       templateUrl:"pages/error.html",
    })
   .when("/register",{
       templateUrl:"pages/register.html",
       controller:"registerController"
   })
    .otherwise({
        redirectTo: '/'
      });

    
}])

myApp.controller('loginController',['$scope','$http','$window',function ($scope,$http,$window){
    $scope.login=function(){
        var jsondata={
            user:$scope.user,
            pwd:$scope.pwd
        }
       $http({
           method:'POST',
           url:"/login",
           headers: {'Content-Type': 'application/json'},
           data:jsondata
       }).then(function(data){
           console.log("login success");
           $window.location="#welcome";
       },function(data){
           console.log("login error");
            $window.location="#error";
       })
    }
      $scope.register=function(){
        $window.location="#register";
    }
}]);
myApp.controller('registerController',['$scope','$http','$window',function ($scope,$http,$window){
   $scope.submit=function(){
    var jsondata={
            user:$scope.user,
            pwd:$scope.pwd,
            firstName:$scope.firstName,
            lastName:$scope.lastName
        }
       $http({
           method:'POST',
           url:"/register",
           headers: {'Content-Type': 'application/json'},
           data:jsondata
       }).then(function(){
           console.log("register success");
       },function(){
           console.log("register error");
       })
    }
}]);

myApp.controller('welcomeController',['$scope',function($scope){
    $scope.saveitems=function(){
<<<<<<< HEAD
        alert("item saved to cart!");
=======
        alert("item saved");
>>>>>>> master
    }
}])