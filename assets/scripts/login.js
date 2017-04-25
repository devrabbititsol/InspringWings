app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService){

 $rootScope.memebers=false;
 $scope.submitForm = function(form) {
window.alert(JSON.stringify(form))
   var y=httpService.test();
   window.alert(y);
$scope.submitted = true;
if ($scope.registrationForm.$valid) {
        $scope.disable = true;
        $scope.loading = true;

			}
      else{
        alert("else")
      }

   $http({
     method: 'POST',
     url: 'http://devrabbit.com/inspiring_wings/web_services/user_login.php',
     data:form,
     headers:{"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"}
   }).then(function successCallback(response) {
                window.alert(JSON.stringify(response.data))
     }, function errorCallback(response) {
                window.alert(JSON.stringify(response.data))
     });
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
