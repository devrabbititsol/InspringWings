app.controller('signUp',function($rootScope,$scope,$state,$http,httpService){
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
     $scope.onSubmit=function(){
  
         var url = "http://devrabbit.com/inspiring_wings/web_services/user_register.php";
      var data = $scope.register;
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
  
         if(res.status == 1){
             var x=res.message;
             window.alert(x);
            localData.set(sessiondata);
              $rootScope.session =res.status;
          //$state.go("OpportunityType");
         }
         else{
           window.alert("Invalid Credentials");
         }
  
         },function(err) {

             window.alert("err");
         });
	
          // alert("sid")
      }

});

/*"Name: User Register

Description: Service to register a new user.

Request Method: POST

URL: devrabbit.com/inspiring_wings/web_services/user_register.php

"*/
/*"
{
        ""first_name"" : ""Vinod"",""last_name"" : ""Kumar"",
        ""email_id"" : ""vinod.alampally4@devrabbit.com"",
        ""password"" : ""password"",""contact_number"" : ""9392184552"",
        ""dob"" : ""1990-03-10"", ""gender"" : ""1"",
        ""aadhar_card_number"" : ""2017201620152018"",
        ""role_id"" : ""2""
}"*/