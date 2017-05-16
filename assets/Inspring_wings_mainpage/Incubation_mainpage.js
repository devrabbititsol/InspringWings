app.controller('Main_IncubationsCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;
$rootScope.selectedname='';
            $scope.convertToDate = function (stringDate){
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate());
            return dateOut;
};
        preService.getIncubationsTypes(data).then(function(res)
        {
            $scope.IncubationsTypes= res;

        },
        function(err)
        {
           window.alert("err");
         });



       $scope.selectedIncubationtype=function(IncubationsType){

        $rootScope.selectedname=IncubationsType.incubation_center_category_name;
       $rootScope.selectedid=IncubationsType.incubation_center_category_id;

      }


      preService.getIncubations(data).then(function(res)
        {
            $scope.Incubations= res;
            /* initController();*/


        },
        function(err)
        {
           window.alert("err");
         });
         $scope.showchanges=function(id){
           if ($scope.Incubations[id].is_active) {
              $scope.Incubations[id].is_active = false;

           }else{
                 $scope.Incubations[id].is_active = true;
           }
         };


});
