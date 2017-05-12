app.controller('myProfileCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService){

   alert("pro");

   $scope.userDetails=JSON.parse(localStorage.getItem("userDetails"));
   //alert("login");
   //lert($scope.userDetails.email_id);
   //alert(JSON.stringify($scope.userDetails));

       $rootScope.session = localData.get();
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       $rootScope.userType = geetingdata.role_id  ;
       $rootScope.username = geetingdata.first_name;

   // $scope.changePassword.email_id = localStorage.getItem("emailid");
});
