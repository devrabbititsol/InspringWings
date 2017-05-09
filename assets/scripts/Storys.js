app.controller('StoriesCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name; 
    
$scope.Storiesdata={};
var data = {'is_active':'1'};
    $scope.pager={};
$scope.loading=true;
//Get stories
    
    
      preService.getStories(data).then(function(res) {
           $scope.Stories= res;
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
              $scope.pager =PaginationService.pagination( $scope.Stories.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.Stories.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
          }
     preService.getStoryType(data).then(function(res) {
           $scope.Stories_category= res;
         },function(err) {
             window.alert("err");
         });
      $scope.addinfo=function()
      {
            $scope.Storymodal="#Storymodal";
            $scope.title="Add New";
            $scope.message="";
           $scope.Storiesdata={};
            $scope.Story.$setPristine();
         if ($scope.Story.$valid) { } 
    $scope.onSubmit=function()
        {
        
        
        var stories=$scope.Storiesdata;
        var sessiondata=$rootScope.session;
        var gettingdata=sessiondata.response_info[0];
        var userdata=gettingdata.user_id;
        stories.created_by=userdata;
        stories.story_id='0';
        if(stories.is_active == true){
         // opportunityDate.is_active ="1";
        }
        else if(stories.is_active == false || stories.is_active == undefined){
         stories.is_active ="0";
        }
        else{

        }
        var data = stories;
           preService.insertStory(data).then(function(res) {
           if(res.status==1)
           {
             $scope.message="Inserted successfully";
             var data = {'is_active':'1'};
                preService.getStories(data).then(function(res)
                {
                    $scope.Stories= res;
                    initController();
               $('#Storymodal').modal('hide');
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
//Insert Story

//Edit Story
      $scope.editInfo=function(Story)
    {
               $scope.Storymodal="#Storymodal";
                $scope.title="Edit";
                $scope.message="";
               $scope.Storiesdata=Story;
               $scope.onSubmit=function()
            {
                 var Eventdata=$scope.Storiesdata;
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
                preService.insertStory(data).then(function(res)
                {
            if(res.status==1)
            {
             $scope.status=res.status;
             var data = {'is_active':'1'};
            $scope.message="Updated SuccessFully";
            preService.getStories(data).then(function(res)
            {
                $scope.Stories= res;
                     initController();
                     $('#Storymodal').modal('hide');
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
//Delete Story
    $scope.deleteInfo=function(Story)
    {
         var result = confirm("Want to Delete ?");
             
             if(result == true){
             
             $scope.Storiesdata=Story;
               var Eventdata=$scope.Storiesdata;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
                 Eventdata.created_by=userdata;
                 delete Eventdata.is_active;
                 Eventdata.is_active='0';
                 var data = Eventdata;
                preService.insertStory(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.getStories(data).then(function(res)
            {
                $scope.Stories= res;
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
