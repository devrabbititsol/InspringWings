app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService){

 $rootScope.memebers=false;

 $scope.submitForm = function(form) {

/*    $scope.submitted = true;
   if ($scope.registrationForm.$valid) {
      
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
  
         },function(err) {

             window.alert("err");
         });
			}
      else{
          // alert("sid")
      }*/

   $rootScope.session = "vinod";
          $state.go("OpportunityType"); 


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
