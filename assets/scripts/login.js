app.controller('loginCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){

 $rootScope.memebers=false;
 $scope.submitForm = function(form) {
   var x = httpService.test();
     alert(x);
    $scope.submitted = true;
   if ($scope.registrationForm.$valid) {
      
      //$scope.loading = true;
      var url = "http://devrabbit.com/inspiring_wings/web_services/user_login.php";
      var data = form;
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
  
         if(res.status == 1){
             var sessiondata=res.status;
            localData.set(sessiondata);
              $rootScope.session =res.status;
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

/*
app.controller('OpportTypeCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
    
      
      //$scope.loading = true;
      var url = "http://devrabbit.com/inspiring_wings/web_services/opportunity_categories.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.OpportTypes= res;

         },function(err) {

             window.alert("err");
         });
			

});
app.controller('UsersCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
     var url = "http://devrabbit.com/inspiring_wings/web_services/quotes.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.Users= res;

         },function(err) {

             window.alert("err");
         });


});
app.controller('EventsCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
     var url = "http://devrabbit.com/inspiring_wings/web_services/events.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.Events= res;

         },function(err) {

             window.alert("err");
         });
       


});
app.controller('StoriesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
      var url = "http://devrabbit.com/inspiring_wings/web_services/stories.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.Stories= res;

         },function(err) {

             window.alert("err");
         });  
});




app.controller('StorysTypesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
      var url = "http://devrabbit.com/inspiring_wings/web_services/story_categories.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.StorysTypes= res;

         },function(err) {

             window.alert("err");
         });  
});


*/












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

app.controller('logoutCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
 
     $scope.logout = function() {
     $localStorage.$reset();
     
     }
    
});