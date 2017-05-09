app.controller('UsersCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData,preService,PaginationService)
{
    $rootScope.session = localData.get();
    var sessiondata=$rootScope.session;
     var geetingdata=sessiondata.response_info[0];
    $rootScope.userType = geetingdata.role_id  ;
    $rootScope.username = geetingdata.first_name; 
    $scope.register={};
    var data = {};
    $scope.pager={};
    $scope.loading=true;
    preService.getUsers(data).then(function(res)
    {
            $scope.Users= res;
            initController();
    },
    function(err)
    {
           window.alert("err");
    });
    function initController() 
    {
             $scope.setPage(1);
    }
    $scope.setPage=function(page)
    {
              if (page < 1 || page > $scope.pager.totalPages) {
                  return;
              }
              $scope.pager =PaginationService.pagination($scope.Users.length,page);
               $scope.items = $scope.Users.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
    }
    //Add Action
   $scope.addinfo=function()
           {
             $scope.usermodal="#usermodal";
             $scope.title="Add New staff";
             $scope.staff=true;
             $scope.message="";
             $scope.register=null;
       $scope.signUp.$setPristine();
             //Insert StoryType 
        if ($scope.signUp.$valid) 
        {
            
        }
    $scope.onSubmit=function()
        {
            var stories=$scope.register;
            if(stories.is_active==true)
            {
                 delete stories.is_active;
                stories.is_active="1";
            }
            else
            {
                stories.is_active="0";
            }
            var sessiondata=$rootScope.session;
            var gettingdata=sessiondata.response_info[0];
            var userdata=gettingdata.user_id; 
            stories.created_by=userdata;
            var data = stories;
            preService.register(data).then(function(res) 
            {
               if(res.status==1)
               {
                    $scope.message="Inserted successfully";
                    var data = {};
                    preService.getStoryType(data).then(function(res)
                    {
                        $scope.storiesTypes= res;
                        initController();
                         $('#usermodal').modal('hide');
                    },
                    function(err) 
                    {

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

 //Edit StoryType   
      $scope.editInfo=function(User)
    {
          
      $scope.usermodal="#usermodal";
      $scope.title="Edit Register";
        $scope.staff=false;
      $scope.message="";
      $scope.register=User;   
      $scope.onSubmit=function()
      {
            var Eventdata=$scope.register;
            var sessiondata=$rootScope.session;
            var geetingdata=sessiondata.response_info[0];
            var userdata=geetingdata.user_id; 
            Eventdata.created_by=userdata;
            var data = Eventdata;
            preService.register(data).then(function(res) 
            {
                if(res.status==1)
               {
                     $scope.status=res.status;
                    $scope.message="Updated SuccessFully";
                     var data = {};
                    preService.register(data).then(function(res)
                    {
                        $scope.Users= res;
                           initController();
                        $('#StoryTypeModal').modal('hide');
                    },
                    function(err) 
                    {
                     window.alert("err");
                    });
               }
                else
                {
                  
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
