app.controller('storycntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;
$rootScope.selectedname='';

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
        },
        function(err)
        {
           window.alert("err");
         });
         $scope.showchanges=function(id){
           if ($scope.Storys[id].is_active) {
              $scope.Storys[id].is_active = false;

           }else{
                 $scope.Storys[id].is_active = true;
           }
         };


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
