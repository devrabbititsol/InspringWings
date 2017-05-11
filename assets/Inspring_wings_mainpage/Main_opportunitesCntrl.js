app.controller('Main_opportunitesCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
   var data={'is_active':'1'};
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
     $scope.selectedopportunity=function(opportunitescategory){
   
      $rootScope.selectedid=opportunitescategory.opportunity_category_id;
      $rootScope.selectedname=opportunitescategory.opportunity_category_name;
      
      }
 
   preService.allOpportunities(data).then(function(res)
        {
            $scope.opportunities= res;
             
              $scope.persons = ['#b2ebf2','#f4b8ce','#bddaf9','#ffccbc','#c1e1a3','#d0bfe7','#d7ccc8'];
        },
    
        function(err)
        {
           window.alert("err");
         });
$scope.numLimit=15;
$scope.readMore=function(){
$scope.numLimit=10000;
};
 /*   $scope.display=function(opportunitycontent){
    $scope.demo='#demo';
    $scope.content=opportunitycontent;
    }*/
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