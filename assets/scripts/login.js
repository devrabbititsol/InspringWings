app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService){

 $rootScope.memebers=false;
 $scope.submitForm = function(form) {
   //var x = httpService.test();
  //   alert(x);
    $scope.submitted = true;
   if ($scope.registrationForm.$valid) {

      //$scope.loading = true;
  //    var url = "http://devrabbit.com/inspiring_wings/web_services/user_login.php";
  //    var data = form;
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //     httpService.httpRequest(url, "P", data,headers).then(function(res) {
         preService.login(form).then(function(res) {
         if(res.status == 1){
             var sessiondata=res;
            localData.set(sessiondata);
            $rootScope.session =res.status;
            var x = res;
            $rootScope.userType = x.response_info[0].user_id;
          //  alert($rootScope.userType);
          $state.go("OpportunityType");
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
