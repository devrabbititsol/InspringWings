app.controller('OpportTypeCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
      $rootScope.session = localData.get();

$scope.opportunitytype={}
$scope.data = {};
$scope.pager={};
$scope.loading=true;
      //$scope.loading = true;
    //  var url = "http://devrabbit.com/inspiring_wings/web_services/opportunity_categories.php";
  //    var data = {};
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //     httpService.httpRequest(url, "P", data,headers).then(function(res) {
  preService.getAllOpp_categories().then(function(res) {
           $scope.OpportTypes= res;
        //   alert(JSON.stringify($scope.OpportTypes));
              initController();
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
                      preService.getAllOpp_categories().then(function(res) {
                    $scope.OpportTypes= res;

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

         $scope.editInfo=function(opportunityDate){
            //     alert("edit");
       $scope.opprtunitymodal="#opprtunityTypes";
       $scope.opportunitytype=opportunityDate
    //   alert(JSON.stringify($scope.opportunitytype));
            $scope.message="";
       $scope.onSubmit=function(){
         //  window.alert('hi');

              var opportunityDate=$scope.opportunitytype;
              var sessiondata=$rootScope.session;
              var geetingdata=sessiondata.response_info[0];
              var userdata=geetingdata.user_id;
              alert(opportunityDate.is_active);
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
                //   alert(JSON.stringify(opportunityDate))
               preService.addNewOpp_categories(opportunityDate).then(function(res) {
                 window.alert(res.message);
                 if(res.status == 1){
                      $scope.message="Updated SuccessFully";
                   preService.getAllOpp_categories().then(function(res) {
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





});
