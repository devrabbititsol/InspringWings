app.controller('storycntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;
                        $scope.convertToDate = function (stringDate){
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate());
            return dateOut;
};
    
        preService.getStoryType(data).then(function(res)
        {
            $scope.StoryTypes= res;
             
        },
        function(err)
        {
           window.alert("err");
         });
       $scope.selectedstory=function(StoryType){
   
        $rootScope.selectedname=StoryType.story_category_name;
       $rootScope.selectedid=StoryType.story_category_id;
      
      }
     
    
      preService.getStories(data).then(function(res)
        {
            $scope.Storys= res;
            /* initController();*/


        },
        function(err)
        {
           window.alert("err");
         });
/*     function initController() {
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
               }*/
               
     
});



app.controller('aboutCntrl',function($rootScope,$scope,$location, $anchorScroll){
      $location.hash('aboutWing');
      $anchorScroll();
});

app.controller('supportCntrl',function($rootScope,$scope,$location, $anchorScroll){
      $location.hash('supportWing');
      $anchorScroll();
});

app.controller('reciverCntrl',function($rootScope,$scope,$location, $anchorScroll){
      $location.hash('receiveWing');
      $anchorScroll();
});
