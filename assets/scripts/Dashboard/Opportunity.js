app.controller('OpportunitiesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService){
      $rootScope.session = localData.get();
       $scope.opportunity={};
    //    var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities.php";
    //    var data = {};
  //      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //      httpService.httpRequest(url, "P", data,headers).then(function(res) {
             preService.allOpportunities().then(function(res) {
           $scope.Opportunities= res;

         },function(err) {

             window.alert("err");
         });

         $scope.addinfo=function(){

            $scope.opprtunitymodal="#opprtunitymodal";
           $scope.opportunity=null;

        }

        $scope.editInfo=function(opportunitydata){
 var result = confirm("Want to Edit?");
  if(result == true){

   $scope.opprtunitymodal="#opprtunitymodal";
      $scope.opportunity=opportunitydata;
  }
    else{
              console.log('Failure');
              $scope.opprtunityTypes=null;
          }

 }

    $scope.onSubmit=function(){
          alert("hi")
      $scope.submitted = true;

       var opportunitydata=$scope.opportunity;
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       var userdata=geetingdata.user_id;
      opportunitydata.created_by=userdata;
      alert("oppp")
      alert(JSON.stringify(opportunitydata));
        window.alert(opportunitydata.created_by);
    // var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities_action.php";
  //    var data = opportunitydata;
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //     httpService.httpRequest(url, "P", data,headers)
        preService.addORUpdateOpp(opportunitydata).then(function(res) {
           window.alert(res.message);
           if(res.status == 1){
             preService.allOpportunities().then(function(res) {
           $scope.Opportunities= res;

         },function(err) {

             window.alert("err");
         });
       }else{

       }
         },function(err) {

             window.alert("err");
         });


    }


});
