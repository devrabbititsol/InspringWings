app.controller('OpportunitiesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
      $rootScope.session = localData.get();
       $scope.opportunity={};
       $scope.data = {};
       $scope.pager={};
    //   $scope.modalVisible=true;
    //    var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities.php";
    //    var data = {};
  //      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //      httpService.httpRequest(url, "P", data,headers).then(function(res) {



             preService.allOpportunities().then(function(res) {
           $scope.Opportunities= res;
              initController();
         },function(err) {

             window.alert("err");
         });

              function initController() {
                   // initialize to page 1
              //     alert("init")
                  $scope.setPage(1);
               }

               $scope.setPage=function(page) {
                // alert("set");
                   if (page < 1 || page > $scope.pager.totalPages) {
                       return;
                   }
                   $scope.pager =PaginationService.pagination($scope.Opportunities.length,page);
                   //alert(JSON.stringify($scope.pager));
                    $scope.items = $scope.Opportunities.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
               }



         preService.getAllOpp_categories().then(function(res) {
                  $scope.OpportTypes= res;
                //  alert(JSON.stringify($scope.OpportTypes))
                },function(err) {

                    window.alert("err");
                });

         $scope.addinfo=function(){

            $scope.opprtunitymodal="#opprtunitymodal";
           $scope.opportunity=null;

        }

        $scope.editInfo=function(opportunitydata){

   $scope.opprtunitymodal="#opprtunitymodal";
      $scope.opportunity=opportunitydata;

 }

    $scope.onSubmit=function(){
    //  $scope.modalVisible=true;
    //      alert("hi")
      $scope.submitted = true;

       var opportunitydata=$scope.opportunity;
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       var userdata=geetingdata.user_id;
      opportunitydata.created_by=userdata;
    //  alert("oppp")
      if(opportunitydata.opportunity_id == null || undefined){
    //    alert(opportunitydata.opportunity_id)
  //      alert("if");
         opportunitydata.opportunity_id = "0";
      }
    //  alert(JSON.stringify(opportunitydata));
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
           initController();
           $scope.success=true;
          // $scope.$dismss("nth")
          $timeout( function(){
            $scope.success=false;
            $('#opprtunitymodal').modal('hide');
        }, 2000 );

          //    $scope.modalVisible=false;
            //  $scope.modalVisible=true;

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
