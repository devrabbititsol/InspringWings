app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService){
$scope.data={};
 $rootScope.memebers=false;
    $scope.submitted = true;
 $scope.submitForm = function() {
   if ($scope.registrationForm.$valid) {
       var data = $scope.data;
         preService.login(data).then(function(res) {
         if(res.status == 1)
         {
             $scope.status=res.status;
             var sessiondata=res;
            localData.set(sessiondata);
            $rootScope.session =res.status;
            var x = res;
             $rootScope.username=x.response_info[0].first_name;
            $rootScope.userType = x.response_info[0].role_id;
           
          $state.go("Dashboard");
         }
         else{
          $scope.message="Invalid Credentials";
         }

         },function(err) {

             window.alert("err");
         });
			}
      else{
          // alert("sid")
      }

  /* $rootScope.session = "vinod";
          $state.go("OpportunityType"); */


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


app.service('localData', function($localStorage) {
 var savedData = {}
 function set(sessiondata) {
   $localStorage.savedData = sessiondata;
 }
 function get() {
  return  $localStorage.savedData;
 }

 return {
  set: set,
  get: get
 }

});
