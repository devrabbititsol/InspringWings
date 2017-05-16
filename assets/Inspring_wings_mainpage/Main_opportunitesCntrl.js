app.controller('Main_opportunitesCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService,$parse){
   var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;
  $rootScope.selectedname='';
                    $scope.convertToDate = function (stringDate){
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate());
            return dateOut;
};
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
          $scope.persons = ['#b2ebf2','#f4b8ce','#bddaf9','#ffccbc','#c1e1a3','#d0bfe7','#d7ccc8'];
            $scope.response_opportunities = res;
            // for(i=0;i<=res.length;i++)
            // {
            //    res[i].isexpand=false;
            //    $scope.response_opportunities.push(res[i]);
            //  }
        },

        function(err)
        {
           window.alert("err");
         });

         $scope.showchanges=function(id){
           if ($scope.response_opportunities[id].is_active) {
              $scope.response_opportunities[id].is_active = false;

           }else{
                 $scope.response_opportunities[id].is_active = true;
           }
         };



});
