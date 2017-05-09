app.controller('storycntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={};
$scope.pager={};
$scope.pageSize=6;
      preService.getStories(data).then(function(res)
        {
            $scope.Storys= res;
             initController();


        },
        function(err)
        {
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
                   $scope.pager =PaginationService.pagination($scope.Storys.length,page,$scope.pageSize);
                   //alert(JSON.stringify($scope.pager));
                    $scope.items = $scope.Storys.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
                   $scope.loading=false;
               }
               
     
});