app.controller('Events',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={};
$scope.filter=false;
$scope.pager={};
$scope.pager1={};
$scope.pageSize=6;
      preService.Eventget(data).then(function(res)
        {
            $scope.Events= res;
            //alert(JSON.stringify($scope.Events));

             var length = $scope.Events.length;
           //alert($scope.Events[0].event_date);
             for(i=0;i<length;i++){
                 $scope.Events[i].event_date =  $scope.Events[i].event_date.slice(0,10);

             }
             initController();
          //   alert(JSON.stringify($scope.Events));
            $scope.convertToDate = function (stringDate){
            //  alert("string");
            //  alert(stringDate)
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
              //alert("init");
                  $scope.setPage(1);
               }

               $scope.setPage=function(page) {
              //    alert("set")
                   if (page < 1 || page > $scope.pager.totalPages) {
                       return;
                   }
            //       alert($scope.Events.length);
              //     alert(page);
            //       alert($scope.pageSize);
                   $scope.pager =PaginationService.pagination($scope.Events.length,page,$scope.pageSize);
            //       alert("pager")
            //        alert(JSON.stringify($scope.pager));
                    $scope.items = $scope.Events.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
                    $scope.length=$scope.items.length;
            //        alert("length");
          //          alert($scope.length)
                    if($scope.length >0){
                      $scope.len = true;
              //        alert($scope.len)
                    }
                    else{
                      $scope.len = false;
              //        alert($scope.len)
                      $scope.pager.totalPages = 2;
                    }
                   $scope.loading=false;
               }


        $scope.search=function(startDate,endDate){
      //    alert(startDate)
    //      alert(endDate)
    //      alert("search")
           var calendar = new Array();

           preService.Eventget(data).then(function(res)
             {
                 $scope.Events= res;
          //
                 var length = $scope.Events.length;
          //
                 for(i=0;i<length;i++){
                     $scope.Events[i].event_date =  $scope.Events[i].event_date.slice(0,10);
                       var x =moment($scope.Events[i].event_date);
                    // //  alert(x);
                    //  var s = moment(startDate, "YYYY-MM-dd");
                    //  alert("s")
                    //  alert(s);
                    //   var e = moment(endDate, "YYYY-MM-dd");
                    //   alert("e")
                var s = moment(startDate);
              //  alert("s")
              //  alert(s);
                var e = moment(endDate);
              //  alert("e")
              //    alert(e);
                            if(x >=s  && x <= e){
                              calendar.push($scope.Events[i]);
                            }
          //                  if (itemDate >= s && itemDate <= e)
                }
              //  alert(calendar.length);
                $scope.Events=calendar
              //    alert(JSON.stringify($scope.Events));
                 initController();
          //
          //
            },
             function(err)
            {
                window.alert("err");
              });
        }

        $scope.showchanges=function(id){
          if ($scope.items[id].is_active) {
             $scope.items[id].is_active = false;

          }else{
                $scope.items[id].is_active = true;
          }
        };
});
