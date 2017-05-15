app.controller('Main_opportunitesCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
   var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;

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
            $scope.opportunities= res;

              $scope.persons = ['#b2ebf2','#f4b8ce','#bddaf9','#ffccbc','#c1e1a3','#d0bfe7','#d7ccc8'];
        },

        function(err)
        {
           window.alert("err");
         });
// $scope.numLimit=15;
// $scope.showA = true;
//  $scope.showb = false;
// $scope.readMore=function(opportunity){
//
//    if(opportunity === opportunity){
//
//        window.alert(opportunity);
//        $scope.numLimit=100000;
//      $scope.showb = true;
//     $scope.showA = false;
//
//       }
//     else{
//
//
//     }
//
// };
//     $scope.readLess=function(opportunity){
//         if(opportunity === opportunity){
//     $scope.showb = false;
//     $scope.showA = true;
// $scope.numLimit=15;
//         }
//         else{}
// };
$scope.numLimit=15;
$scope.showA = true;
 $scope.showb = false;
$scope.readMore=function(opportunity){
  window.alert(opportunity);
       $scope.numLimit=10000;
     $scope.showb= opportunity;
$scope.showA= opportunity;
};
    $scope.readLess=function(opportunity){

    $scope.showb= opportunity;
    $scope.showA= opportunity;
$scope.numLimit=15;

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
