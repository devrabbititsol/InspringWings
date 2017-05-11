app.controller('viewAllReqCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name; 
$scope.takeupdata={};
var data = {};
    $scope.pager={};
$scope.loading=true;
//Get stories
      preService.allRequest(data).then(function(res) {
           $scope.viewallrequets= res;
        //window.alert(JSON.stringify(res));
          initController();
         },function(err) {
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
              $scope.pager =PaginationService.pagination( $scope.viewallrequets.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.viewallrequets.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
          }
//Takeup Action
             $scope.takeupcomment=function(allrequests) 
              {
                $scope.takeupmodalModal="#takeupmodalModal";
                 $scope.loading1 = true;
                $scope.message="";
                $scope.takeupdata=null;
                      var data = {'helper_request_id':allrequests.request_id};
                preService.takeupcomments(data).then(function(res)
                {
                    $scope.takeupcomments= res;
                    $scope.loading1=false;
           
                },
            function(err)
            {
             window.alert("err");
            });
 
                $scope.onSubmit=function()
        {
        var takeupproblem=$scope.takeupdata;
        //var sessiondata=$rootScope.session;
        //var gettingdata=sessiondata.response_info[0];
        //var userdata=gettingdata.user_id;
        var requestdata=allrequests;
        takeupproblem.helper_request_id=requestdata.request_id;
        takeupproblem.takeup_status=requestdata.request_status;
        takeupproblem.takeup_id='0';
         takeupproblem.helper_id='19';
        takeupproblem.created_by='19';//insert the loggin user data
        var data = takeupproblem;
           preService.addtakeupproblem(data).then(function(res) {
           if(res.status==1)
           {
             $scope.message="Inserted successfully";
             var data = {'helper_request_id':requestdata.request_id};
                preService.takeupcomments(data).then(function(res)
                {
                    $scope.takeupcomments= res;
                    initController();
           
                },
            function(err)
            {
             window.alert("err");
            });
           }
        else{
        window.alert("err");
        }
         },function(err) {
             window.alert("err");
         });

    }
                 
              }

  });



