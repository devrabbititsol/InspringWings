app.controller('signUp',function($rootScope,$scope,$state,$http,httpService,preService){
 $rootScope.memebers=false;
 $scope.register = {};
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
     
      $scope.compare = function (register) {
            $scope.isconfirm = $scope.cpassword == register.password ? true : false;
        }
//Register
     $scope.onSubmit=function()
     {
  		if ($scope.signUp.$valid) 
        {
             var data = $scope.register;
             preService.register(data).then(function(res) 
            {
                 if(res.status == 1)
                 {
                     $scope.status=res.status;
                     $scope.message=res.message;
                     $scope.register={};
                     $scope.signUp.$setPristine();
                        
                 }
                 else
                 {
                   $scope.message="Invalid Credentials";
                 }
            },function(err) {
                 window.alert("err");
             });
        }
      }

});
