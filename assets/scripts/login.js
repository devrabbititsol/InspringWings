app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService){

 $rootScope.memebers=false;

 $scope.submitForm = function(form) {
// window.alert(JSON.stringify(form))
//    var y=httpService.test();
//    window.alert(y);
    $scope.submitted = true;
   if ($scope.registrationForm.$valid) {
      //  $scope.disable = true;
      $scope.loading = true;
      var url = "http://devrabbit.com/inspiring_wings/web_services/user_login.php";
      var data = form;
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
         if(res.status == 1){
           alert("true")
         }
         else{
           window.alert("Invalid Credentials");
         }
      //     window.alert("succ");
      //     console.log(JSON.stringify(res));
      //     window.alert("service");
         },function(err) {

             window.alert("err");
         });
			}
      else{
          // alert("sid")
      }




}




    $scope.homepage=function()
    {
    $rootScope.memebers=true;
       $state.go("Home");
    }
     $scope.signUp=function()
    {
    $rootScope.memebers=false;
       $state.go("SignUp");
    }
       $scope.forgotPassword=function()
    {
    $rootScope.memebers=false;
       $state.go("ForgotPassword");
    }
});
