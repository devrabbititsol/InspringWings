app.controller('closedReqCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
 $rootScope.session = localData.get();
      var sessiondata=$rootScope.session;
     var geetingdata=sessiondata.response_info[0];
        $rootScope.userType=geetingdata.role_id;
    $rootScope.username = geetingdata.first_name;
    $scope.loading=true;
$scope.data={'request_status':'Closed'};
$scope.pager={};
preService.allRequest($scope.data).then(function(res) {
     $scope.Stories= res;
     var length = $scope.Stories.length;
    initController();
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
