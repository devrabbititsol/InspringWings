app.controller('OpportunitiesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
    $scope.opportunity={};
        var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities.php";
        var data = {};
        var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
        httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.Opportunities= res;

         },function(err) {

             window.alert("err");
         });
    $scope.onSubmit=function(){
     
         var opportunitydata=$scope.opportunity;
        var sessiondata=$rootScope.session;
    var geetingdata=sessiondata.response_info[0];
    var userdata=geetingdata.user_id; 
      opportunitydata.created_by=userdata;
                window.alert(opportunitydata.created_by);
     var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities_action.php";
      var data = opportunitydata;
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           window.alert(res.message);
         },function(err) {

             window.alert("err");
         });
   
    }
    
 
});

