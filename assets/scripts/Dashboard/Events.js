app.controller('EventsCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
    $rootScope.session = localData.get();
    $scope.Event={};
    var data = {};
    $scope.pager={};
//Get Event data
       preService.Eventget(data).then(function(res)
        {
            $scope.Events= res;
            initController();
        },
        function(err)
        {
           window.alert("err");
         });

         function initController() {
              // initialize to page 1
             $scope.setPage(1);
          }

          $scope.setPage=function(page) {
           // alert("set");
              if (page < 1 || page > $scope.pager.totalPages) {
                  return;
              }
              $scope.pager =PaginationService.pagination($scope.Events.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items = $scope.Events.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
          }



//Add Action
       $scope.addinfo=function()
       {
            $scope.Eventmodal="#Eventmodal";
            $scope.message="";
            $scope.Event=null;
           //Insert Event
    $scope.onSubmit=function()
    {
        var Eventdata=$scope.Event;
        var sessiondata=$rootScope.session;
        var geetingdata=sessiondata.response_info[0];
        var userdata=geetingdata.user_id;
        Eventdata.created_by=userdata;
        var data = Eventdata;
        preService.Eventinsert(data).then(function(res)
        {
            if(res.status==1)
            {
                $scope.message="Inserted successfully";
                var data = {};
                preService.Eventget(data).then(function(res)
                {
                    $scope.Events= res;
                    initController();
                 $('#Eventmodal').modal('hide');
                },function(err) {

                 window.alert("err");
                });
           }
            else
            {
            window.alert("err");
            }
         },
        function(err)
        {
            window.alert("err");
         });
    }
       }

 //Edit Event
    $scope.editInfo=function(Event)
    {
          $scope.Eventmodal="#Eventmodal";
          $scope.message="";
          $scope.Event=Event;
          $scope.onSubmit=function()
          {
            var Eventdata=$scope.Event;
            var sessiondata=$rootScope.session;
            var geetingdata=sessiondata.response_info[0];
            var userdata=geetingdata.user_id;
            Eventdata.created_by=userdata;
            var data = Eventdata;
            preService.Eventinsert(data).then(function(res)
            {
                if(res.status==1)
                {
                    $scope.status=res.status;
                    var data = {};
                    $scope.message="Updated SuccessFully";
                    preService.Eventget(data).then(function(res)
                        {
                            $scope.Events= res;
                            initController();
                             $('#Eventmodal').modal('hide');
                        },
                        function(err)
                        {
                             window.alert("err");
                        });
                }
                else
                {
                    window.alert("err");
                    $scope.message="Invalid Data";
                }
            },
            function(err)
            {
                window.alert("err");
            });

        }
    }
});
