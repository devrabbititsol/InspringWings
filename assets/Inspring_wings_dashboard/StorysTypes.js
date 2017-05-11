
app.controller('StorysTypesCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id ;
$rootScope.username = geetingdata.first_name;
    
    
$scope.StorysTypesdata={};
var data = {'is_active':'1'};
$scope.pager={};
$scope.loading=true;
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
              $scope.loading=false;
          }
//Add Action
   $scope.addinfo=function()
           {
             $scope.StoryTypeModal="#StoryTypeModal";
             $scope.title="Add New ";
             $scope.message="";
             $scope.StorysTypesdata=null;
             $scope.StoryType.$setPristine();
             if ($scope.StoryType.$valid) { }
    $scope.onSubmit=function()
        {
            var stories=$scope.StorysTypesdata;
            var sessiondata=$rootScope.session;
            var gettingdata=sessiondata.response_info[0];
            var userdata=gettingdata.user_id;
            stories.created_by=userdata;
            stories.story_category_id='0';
            if(stories.is_active == true){
             // opportunityDate.is_active ="1";
            }
            else if(stories.is_active == false || stories.is_active == undefined){
             stories.is_active ="0";
            }
            else{

            }
            var data = stories;
            preService.insertStoryType(data).then(function(res)
            {
               if(res.status==1)
               {
                    $scope.message="Inserted successfully";
                    var data = {'is_active':'1'};
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
          
      $scope.StoryTypeModal="#StoryTypeModal";
      $scope.title="Edit";
      $scope.message="";
      $scope.StorysTypesdata=StorysType;
      $scope.onSubmit=function()
      {
            var Eventdata=$scope.StorysTypesdata;
            var sessiondata=$rootScope.session;
            var geetingdata=sessiondata.response_info[0];
            var userdata=geetingdata.user_id;
            Eventdata.created_by=userdata;
            if(Eventdata.is_active == true){
             // opportunityDate.is_active ="1";
            }
            else if(Eventdata.is_active == false || Eventdata.is_active == undefined){
             Eventdata.is_active ="0";
            }
            else{

            }
            var data = Eventdata;

            preService.insertStoryType(data).then(function(res)
            {
                if(res.status==1)
               {
                     $scope.status=res.status;
                    $scope.message="Updated SuccessFully";
                     var data = {'is_active':'1'};
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
  //Delete StoryType     
   $scope.deleteInfo=function(StorysType)
    {
         var result = confirm("Want to Delete ?");
             
             if(result == true){
             
             $scope.Storiesdata=StorysType;
               var Eventdata=$scope.Storiesdata;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
                 Eventdata.created_by=userdata;
                 delete Eventdata.is_active;
                 Eventdata.is_active='0';
                 var data = Eventdata;
                preService.insertStoryType(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.getStoryType(data).then(function(res)
            {
                $scope.storiesTypes= res;
                     initController();
            },function(err) {
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
             else{}
    }   
      
});
