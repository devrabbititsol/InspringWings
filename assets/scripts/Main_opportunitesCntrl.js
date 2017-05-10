app.controller('Main_opportunitesCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={};
$scope.pager={};
$scope.pageSize=6;
      preService.getAllOpp_categories(data).then(function(res)
        {
            $scope.opportunitiestypes= res;
             /*initController();*/
            

        },
     
        function(err)
        {
           window.alert("err");
         });
     $scope.selectedopportunity=function(name){
   
      $rootScope.selectedname=name;
     
      
      }
     
   preService.allOpportunities(data).then(function(res)
        {
            $scope.opportunities= res;
             //initController();


        },
        function(err)
        {
           window.alert("err");
         });
   /*function initController() {
                   // initialize to page 1
              //     alert("init")
                  $scope.setPage(1);
               }

               $scope.setPage=function(page) {
                // alert("set");
                   if (page < 1 || page > $scope.pager.totalPages) {
                       return;
                   }
                   $scope.pager =PaginationService.pagination($scope.opportunities.length,page,$scope.pageSize);
                   //alert(JSON.stringify($scope.pager));
                    $scope.items = $scope.opportunities.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
                   $scope.loading=false;
               }*/
              
     
});