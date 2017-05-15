app.controller('OpportTypeCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
      $rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name;

$scope.opportunitytype={}
$scope.data = {};
$scope.pager={};
$scope.loading=true;
$scope.nodata='';
   var data={'is_active':'1'};
  preService.getAllOpp_categories(data).then(function(res) {
           $scope.OpportTypes= res;
           
           if($scope.OpportTypes.length == 0){
          //   alert("if")
             $scope.loading = false;
          //   alert($scope.loading);
             $scope.nodata = true;
        //     alert($scope.nodata);
                    return;
           }
           else{
                     initController();
                     $scope.nodata= false ;
           }
        //   alert(JSON.stringify($scope.OpportTypes));

         },function(err) {

             window.alert("err");
         });


         function initController() {
              // initialize to page 1
             $scope.setPage(1);
          }

          $scope.setPage=function(page) {
           // alert("set");
              if (page < 1 || page > $scope.pager.totalPages) {
                  return;
              }
              $scope.pager =PaginationService.pagination($scope.OpportTypes.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items = $scope.OpportTypes.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);

               $scope.loading=false;
          }

         $scope.addinfo=function(){

              $scope.message="";
            $scope.opprtunitymodal="#opprtunityTypes";
          $scope.opportunitytype=null;
             $scope.OpportunityTypeForm.$setPristine();
             if ($scope.OpportunityTypeForm.$valid) {}
          $scope.onSubmit=function(){
            //  window.alert('hi');

                 var opportunityDate=$scope.opportunitytype;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
              //   alert(opportunityDate.is_active);
                 if(opportunityDate.is_active == true){
                  // opportunityDate.is_active ="1";
                 }
                 else if(opportunityDate.is_active == false || opportunityDate.is_active == undefined){
                  opportunityDate.is_active ="0";
                 }
                 else{

                 }

                if(opportunityDate.opportunity_category_id == null || undefined){
              //    alert(opportunitydata.opportunity_id)
            //      alert("if");
                   opportunityDate.opportunity_category_id = "0";
                }
                      //    alert("new");
                //      alert(JSON.stringify(opportunityDate))
                  preService.addNewOpp_categories(opportunityDate).then(function(res) {
                //    window.alert(res.message);
                    if(res.status == 1){
                      $scope.message="Inserted successfully";
                          var data={'is_active':'1'};
                      preService.getAllOpp_categories(data).then(function(res) {
                    $scope.OpportTypes= res;
                        $scope.nodata= false;
                      initController();
                  $('#opprtunityTypes').modal('hide');
                  //   alert(JSON.stringify($scope.OpportTypes))
                  //    alert($scope.OpportTypes.length);

                  },function(err) {

                      window.alert("err");
                  });
                }else{
                      //  alert("else")
                }
                  },function(err) {

                      window.alert("err");
                  });


             }

        }

         $scope.editInfo=function(OpportType){
            //     alert("edit");
       $scope.opprtunitymodal="#opprtunityTypes";
       $scope.opportunitytype=OpportType;
    //   alert(JSON.stringify($scope.opportunitytype));
            $scope.message="";
       $scope.onSubmit=function(){
         //  window.alert('hi');

              var opportunityDate=$scope.opportunitytype;
              var sessiondata=$rootScope.session;
              var geetingdata=sessiondata.response_info[0];
              var userdata=geetingdata.user_id;
              
              if(opportunityDate.is_active == true){
               // opportunityDate.is_active ="1";
              }
              else if(opportunityDate.is_active == false || opportunityDate.is_active == undefined){
               opportunityDate.is_active ="0";
              }
              else{

              }

               preService.addNewOpp_categories(opportunityDate).then(function(res) {
                 
                 if(res.status == 1){
                      $scope.message="Updated SuccessFully";
                       var data={'is_active':'1'};
                   preService.getAllOpp_categories(data).then(function(res) {
                 $scope.OpportTypes= res;
                   initController();
                    $('#opprtunityTypes').modal('hide');

               //   alert(JSON.stringify($scope.OpportTypes))
               //    alert($scope.OpportTypes.length);

               },function(err) {

                   window.alert("err");
               });
             }else{
                    // alert("else")
             }
               },function(err) {

                   window.alert("err");
               });


          }
           }

      $scope.deleteInfo=function(OpportType){
   var result = confirm("Want to Delete ?");

             if(result == true){

             $scope.Storiesdata=OpportType;
               var Eventdata=$scope.Storiesdata;

                 delete Eventdata.is_active;
                 Eventdata.is_active='0';
                 var data = Eventdata;
                preService.addNewOpp_categories(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.getAllOpp_categories(data).then(function(res)
            {
                $scope.OpportTypes= res;
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
