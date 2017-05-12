app.controller('viewPendingReqCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
 $rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id ;
$rootScope.username = geetingdata.first_name;
$scope.loading=true;
$scope.data={};
$scope.pager={};
$scope.nodata='';
preService.allRequest($scope.data).then(function(res) {
     $scope.Stories= res;
     var length = $scope.Stories.length;
  //   alert(length);
  //    for(i=0;i<length;i++){
  //        alert(i);
  //      if($scope.Stories[i].request_status == "Open"){
  //        alert("for");
  //     // $scope.newList.push($scope.Stories[i]);
  //    }
  //  }
    //      alert($scope.newList.length);
    if($scope.Stories.length == 0){
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
   },function(err) {
       window.alert("err");
   });
  function initController() {
        // initialize to page 1
      //  alert("init");
       $scope.setPage(1);
    }
    $scope.setPage=function(page) {
      //alert("set");
        if (page < 1 || page > $scope.pager.totalPages) {
            return;
        }
        $scope.pager =PaginationService.pagination( $scope.Stories.length,page);
        //alert(JSON.stringify($scope.pager));
         $scope.items =  $scope.Stories.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        // alert(JSON.stringify($scope.items));
        $scope.loading=false;
    }





  });
