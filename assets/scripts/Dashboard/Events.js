app.controller('EventsCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
   
    $scope.Event={};
 
//Get 
     var url = "http://devrabbit.com/inspiring_wings/web_services/events.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.Events= res;
         },function(err) {

             window.alert("err");
         });
//Insert
    $scope.onSubmit=function(){
         var Eventdata=$scope.Event;
        var sessiondata=$rootScope.session;
    var geetingdata=sessiondata.response_info[0];
    var userdata=geetingdata.user_id; 
      Eventdata.created_by=userdata;
                window.alert(Eventdata.created_by);

     var url = "http://devrabbit.com/inspiring_wings/web_services/events_action.php";
      var data = Eventdata;
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           window.alert(res.message);
         },function(err) {

             window.alert("err");
         });
   
    }
});



/*app.service('Webservices',function($scope){

    


});*/

