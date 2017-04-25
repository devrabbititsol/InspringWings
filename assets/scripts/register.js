app.controller('signUp',function($rootScope,$scope,$state){
window.alert("reg");
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

});
