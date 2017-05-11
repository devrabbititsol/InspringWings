app.controller('OpportunitiesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
    
    
      $rootScope.session = localData.get();
    var sessiondata=$rootScope.session;
     var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id  ;
$rootScope.username = geetingdata.first_name; 
       $scope.opportunity={};
       var data={'is_active':'1'};
       $scope.pager={};
       $scope.loading=true;
             preService.allOpportunities(data).then(function(res) {
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
                   $scope.loading=false;
               }



         preService.getAllOpp_categories(data).then(function(res) {
                  $scope.OpportTypes= res;
                //  alert(JSON.stringify($scope.OpportTypes))
                },function(err) {

                    window.alert("err");
                });

         $scope.addinfo=function(){
          $scope.message="";
            $scope.opprtunitymodal="#opprtunitymodal";
           $scope.opportunity=null;
             $scope.opportunityform.$setPristine();
            if ($scope.opportunityform.$valid) { }  
           $scope.onSubmit=function(){
             $scope.submitted = true;
              var opportunitydata=$scope.opportunity;
              var sessiondata=$rootScope.session;
              var geetingdata=sessiondata.response_info[0];
              var userdata=geetingdata.user_id;
             opportunitydata.created_by=userdata;
             if(opportunitydata.is_active == true){
              // opportunityDate.is_active ="1";
             }
             else if(opportunitydata.is_active == false || opportunitydata.is_active == undefined){
              opportunitydata.is_active ="0";
             }
             else{

             }
             if(opportunitydata.opportunity_id == null || undefined){
                opportunitydata.opportunity_id = "0";
             }
            //   window.alert(opportunitydata.created_by);
          //  alert(JSON.stringify(opportunitydata));

               preService.addORUpdateOpp(opportunitydata).then(function(res) {
              //    window.alert(res.message);
                  if(res.status == 1){
                    $scope.message="Inserted successfully";
                      var data={'is_active':'1'};
                    preService.allOpportunities(data).then(function(res) {
                  $scope.Opportunities= res;

                  initController();
                   $('#opprtunitymodal').modal('hide');

                },function(err) {

                    window.alert("err");
                });
              }else{

              }
                },function(err) {

                    window.alert("err");
                });


           }
           
        }

        $scope.editInfo=function(opportunitydata){

   $scope.opprtunitymodal="#opprtunitymodal";
      $scope.opportunity=opportunitydata;

 $scope.message="";

    $scope.onSubmit=function(){
      $scope.submitted = true;
       var opportunitydata=$scope.opportunity;
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       var userdata=geetingdata.user_id;
      opportunitydata.created_by=userdata;

     
      //  window.alert(opportunitydata.created_by);
      if(opportunitydata.is_active == true){
       // opportunityDate.is_active ="1";
      }
      else if(opportunitydata.is_active == false || opportunitydata.is_active == undefined){
       opportunitydata.is_active ="0";
      }
      else{

      }
        preService.addORUpdateOpp(opportunitydata).then(function(res) {
        //   window.alert(res.message);
           if(res.status == 1){
               $scope.message="Updated SuccessFully";
               var data={'is_active':'1'};
             preService.allOpportunities(data).then(function(res) {
           $scope.Opportunities= res;
           initController();
            $('#opprtunitymodal').modal('hide');

         },function(err) {

             window.alert("err");
         });
       }else{

       }
         },function(err) {

             window.alert("err");
         });


    }
}

        
              $scope.deleteInfo=function(opportunitydata){
   var result = confirm("Want to Delete ?");
             
             if(result == true){
             
             $scope.Storiesdata=opportunitydata;
               var Eventdata=$scope.Storiesdata;
                var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       var userdata=geetingdata.user_id;
                   Eventdata.created_by=userdata;
                 delete Eventdata.is_active;
                 Eventdata.is_active='0';
                 var data = Eventdata;
                
                preService.addORUpdateOpp(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.allOpportunities(data).then(function(res)
            {
                $scope.Opportunities= res;
                     initController();
            },function(err) {
             window.alert("err");
            });
           }
        else{
            window.alert("err");
            }
                 },function(err) {
                     window.alert("err");
                 });
             }
             else{}
           }

});
