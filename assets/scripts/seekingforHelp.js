app.controller('seekingforHelpCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id  ;
$rootScope.username = geetingdata.first_name; 
    
$scope.commentdata={}; 
$scope.request={};
var data = {"receiver_id" : geetingdata.user_id};
    $scope.pager={};
$scope.loading=true;
//Get stories
      preService.allRequest(data).then(function(res) {
           $scope.viewallrequets= res;
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
           preService.getAllOpp_categories().then(function(res) {
                  $scope.OpportTypes= res;
                //  alert(JSON.stringify($scope.OpportTypes))
                },function(err) {

                    window.alert("err");
                });

        $scope.addinfo=function()
        {
            $scope.seekingforhelp="#seekingforhelp";
             $scope.selectdata=false;
             $scope.message="";
            $scope.title="Add new";
            $scope.request=null;
              $scope.seekingforhelpform.$setPristine();
         if ($scope.seekingforhelpform.$valid) { }
                $scope.onSubmit=function()
        {
            window.alert('hi');
        var requets=$scope.request;
        var sessiondata=$rootScope.session;
        var gettingdata=sessiondata.response_info[0];
        var userdata=gettingdata.user_id;
        requets.receiver_id=gettingdata.user_id;
        requets.request_id=0;
        requets.receiver=gettingdata.first_name;
         requets.request_status="open";
    /*    if(stories.is_active == true){
         // opportunityDate.is_active ="1";
        }
        else if(stories.is_active == false || stories.is_active == undefined){
         stories.is_active ="0";
        }
        else{

        }*/
        var data = requets;
           preService.addOrUp_Request(data).then(function(res) {
           if(res.status==1)
           {
             $scope.message="Inserted successfully";
             var data = {"receiver_id" : gettingdata.user_id};
                preService.allRequest(data).then(function(res)
                {
                    $scope.viewallrequets= res;
                    initController();
               $('#seekingforhelp').modal('hide');
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
        
//edit

        
              $scope.editInfo=function(allrequets)
              {
               $scope.seekingforhelp="#seekingforhelp";
                  $scope.selectdata=true;
                $scope.title="Edit";
                $scope.message="";
               $scope.request=allrequets;
               $scope.onSubmit=function()
                {
                 var Eventdata=$scope.request;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
                 Eventdata.reciver_id=userdata;
        /*         if(Eventdata.is_active == true){
                  // opportunityDate.is_active ="1";
                 }
                 else if(Eventdata.is_active == false || Eventdata.is_active == undefined){
                  Eventdata.is_active ="0";
                 }
                 else{

                 }*/
                 var data = Eventdata;
                preService.addOrUp_Request(data).then(function(res)
                {
            if(res.status==1)
            {
             $scope.status=res.status;
            
            $scope.message="Updated SuccessFully";
                 var data = {"receiver_id" : geetingdata.user_id};
            preService.allRequest(data).then(function(res)
            {
                $scope.viewallrequets= res;
                     initController();
                     $('#seekingforhelp').modal('hide');
            },function(err) {
             window.alert("err");
            });
           }
        else{
            window.alert("err");
         $scope.message="Invalid Data";
            }
                 },function(err) {
                     window.alert("err");
                 });

            }
    }
              $scope.comment=function(allrequets) 
              {
               
                     $scope.commentmodel="#commentmodel";
                  $scope.loading1 = true;
                $scope.message="";
                 $scope.commentdata=null;
                      var data = {'helper_request_id':allrequets.request_id};
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
        var takeupproblem=$scope.commentdata;
        //var sessiondata=$rootScope.session;
        //var gettingdata=sessiondata.response_info[0];
        //var userdata=gettingdata.user_id;
        var requestdata=allrequets;
        takeupproblem.helper_request_id=requestdata.request_id;
        takeupproblem.takeup_status=requestdata.request_status;
        takeupproblem.takeup_id=requestdata.takeup_id;
         takeupproblem.helper_id='3';
        takeupproblem.created_by='3';//insert the loggin user data
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
