app.controller('Events',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={};
$scope.pager={};
$scope.pageSize=6;
      preService.Eventget(data).then(function(res)
        {
            $scope.Events= res;
             initController();
            $scope.convertToDate = function (stringDate){
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate());
            return dateOut;
};

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
                   $scope.pager =PaginationService.pagination($scope.Events.length,page,$scope.pageSize);
                   //alert(JSON.stringify($scope.pager));
                    $scope.items = $scope.Events.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
                   $scope.loading=false;
               }
               
        $scope.onSubmit=function(property, startDate, endDate){
           return function (item) {
        if (item[property] === null) return false;
 
        var itemDate = moment(item[property]);
        var s = moment(startDate, "DD-MM-YYYY");
        var e = moment(endDate, "DD-MM-YYYY");
 
        if (itemDate >= s && itemDate <= e) return true;
        return false;
    }
        
        
        }
});