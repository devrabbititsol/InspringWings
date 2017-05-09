app.controller('forgotpassCntrl',function($rootScope,$scope,$state){
 $rootScope.memebers=false;
    $scope.homepage=function()
    {
    $rootScope.memebers=true;
       $state.go("Home");
    }
     $scope.login=function()
    {
    $rootScope.memebers=false;
       $state.go("Login");
    }

     $scope.onSubmit=function(){
     if ($scope.forgotpassword.$valid) {
         
     }
     
     }
});
