app.controller('OpportTypeCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService){
      $rootScope.session = localData.get();

$scope.opportunitytype={}
      //$scope.loading = true;
    //  var url = "http://devrabbit.com/inspiring_wings/web_services/opportunity_categories.php";
  //    var data = {};
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
  //     httpService.httpRequest(url, "P", data,headers).then(function(res) {
  preService.getAllOpp_categories().then(function(res) {
           $scope.OpportTypes= res;

         },function(err) {

             window.alert("err");
         });

         $scope.addinfo=function(){
                alert("add");
            $scope.opprtunitymodal="#opprtunityTypes";
          $scope.opportunitytype=null;

        }

         $scope.editInfo=function(opportunityDate){
                 alert("edit");
    $scope.opprtunitymodal="#opprtunityTypes";
       $scope.opportunitytype=opportunityDate;

           }


    $scope.onSubmit=function(){
    window.alert('hi');

           var opportunityDate=$scope.opportunitytype;
           var sessiondata=$rootScope.session;
           var geetingdata=sessiondata.response_info[0];
           var userdata=geetingdata.user_id;
          opportunityDate.created_by=userdata;
          if(opportunityDate.is_active == true){
            opportunityDate.is_active =="1";
          }
          else{
            opportunityDate.is_active =="0";
          }
        //  alert("oppp")
          if(opportunityDate.opportunity_category_id == null || undefined){
        //    alert(opportunitydata.opportunity_id)
      //      alert("if");
             opportunityDate.opportunity_category_id = "0";
          }
                     alert(JSON.stringify(opportunityDate))
            preService.addNewOpp_categories(opportunityDate).then(function(res) {
              window.alert(res.message);
              if(res.status == 1){
                preService.getAllOpp_categories().then(function(res) {
              $scope.Opportunities= res;
               alert(JSON.stringify($scope.Opportunities))
            },function(err) {

                window.alert("err");
            });
          }else{
                  alert("else")
          }
            },function(err) {

                window.alert("err");
            });


       }


});
