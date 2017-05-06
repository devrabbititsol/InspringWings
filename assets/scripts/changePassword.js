app.controller('changePasswordCntrl',function($rootScope,$scope,$state,$localStorage,localData,preService,$timeout){
      $scope.changePassword={}
      var sessiondata=$rootScope.session;
      var geetingdata=sessiondata.response_info[0];
         $rootScope.userType=geetingdata.user_id;
      $scope.message=""
      $scope.changePassword.email_id = localStorage.getItem("emailid");
      $scope.submitForm=function(changePassword){
    //  alert("sub")
      $scope.submitted = true;


      // alert("hi")
       preService.changePassword(changePassword).then(function(res) {
       if(res.status == 1){
      //   window.alert(res.message)
      $scope.message = res.message;
      $timeout(function(){
        $state.go("Dashboard")
      },1000);
      //   $state.go("Dashboard")
        }

      else{

      }

            },function(err) {

            window.alert("err");
        });




       }
});
