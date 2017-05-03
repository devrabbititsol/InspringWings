
app.controller('StorysTypesCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
$scope.StorysTypesdata={};
var data = {};
$scope.pager={};
//Get StoryType   
       preService.getStoryType(data).then(function(res) 
        {
           $scope.storiesTypes= res;
           initController();
         },
        function(err)
        {
             window.alert("error");
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
              $scope.pager =PaginationService.pagination( $scope.storiesTypes.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.storiesTypes.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
          }
//Add Action
   $scope.addinfo=function()
           {
             $scope.StoryTypeModal="#StoryTypeModal";
             $scope.message="";
             $scope.StorysTypesdata=null;
             //Insert StoryType       
    $scope.onSubmit=function()
        {
            var stories=$scope.StorysTypesdata;
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
            preService.insertStoryType(data).then(function(res) 
            {
               if(res.status==1)
               {
                    $scope.message="Inserted successfully";
                    var data = {};
                    preService.getStoryType(data).then(function(res)
                    {
                        $scope.storiesTypes= res;
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
      $scope.editInfo=function(StorysType)
    {
          window.alert(StorysType.is_active);
      $scope.StoryTypeModal="#StoryTypeModal";
      $scope.message="";
      $scope.StorysTypesdata=StorysType;   
      $scope.onSubmit=function()
      {
            var Eventdata=$scope.StorysTypesdata;
            var sessiondata=$rootScope.session;
            var geetingdata=sessiondata.response_info[0];
            var userdata=geetingdata.user_id; 
            Eventdata.created_by=userdata;
            var data = Eventdata;
            preService.insertStoryType(data).then(function(res) 
            {
                if(res.status==1)
               {
                     $scope.status=res.status;
                    $scope.message="Updated SuccessFully";
                     var data = {};
                    preService.getStoryType(data).then(function(res)
                    {
                        $scope.storiesTypes= res;
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
