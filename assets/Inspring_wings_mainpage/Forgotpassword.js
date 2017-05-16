app.controller('forgotpassCntrl',function($rootScope,$scope,$state,preService,$timeout){
  
 $rootScope.memebers=false;
 $scope.forgotdata={};
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

     $scope.onSubmit=function(data){

       $scope.message="";
     if ($scope.forgotpassword.$valid) {

       preService.forgotPassword(data).then(function(res) {

       if(res.status == 1)
       {
           $scope.status=res.status;
           $scope.message = res.message;
           $timeout(function(){
             $state.go("Login")
           },2000);


     }

     else{

       $scope.message =  res.message;

     }
   },function(err) {

       window.alert("err");
   });
 }

     }
});
