app.controller('viewAllReqCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
$rootScope.session = localData.get();
    
$scope.Storiesdata={};
var data = {};
    $scope.pager={};
$scope.loading=true;
//Get stories
      preService.allRequest(data).then(function(res) {
           $scope.viewallrequets= res;
        window.alert(JSON.stringify(res));
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
              $scope.pager =PaginationService.pagination( $scope.viewallrequets.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.viewallrequets.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
          }


  });
