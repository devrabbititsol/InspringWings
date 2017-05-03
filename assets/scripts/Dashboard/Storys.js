app.controller('StoriesCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
$scope.Storiesdata={};
var data = {};
    $scope.pager={};
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
          }
     preService.getStoryType(data).then(function(res) {
           $scope.Stories_category= res;
         },function(err) {
             window.alert("err");
         });
      $scope.addinfo=function()
      {
            $scope.Storymodal="#Storymodal";
            $scope.message="";
            $scope.Storiesdata=null;
    $scope.onSubmit=function()
        {
        var stories=$scope.Storiesdata;
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
           preService.insertStory(data).then(function(res) {
           if(res.status==1)
           {
             $scope.message="Inserted successfully";
             var data = {};
                preService.getStories(data).then(function(res)
                {
                    $scope.Stories= res;
                    initController();
                          $scope.success=true;
                   // $scope.$dismss("nth")
                   $timeout( function(){
                     $scope.success=false;
                     $('#Storymodal').modal('hide');
                 }, 2000 );
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
                $scope.message="";
               $scope.Storiesdata=Story;   
               $scope.onSubmit=function()
            {
                 var Eventdata=$scope.Storiesdata;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id; 
                 Eventdata.created_by=userdata;
                 var data = Eventdata;
                preService.insertStory(data).then(function(res) 
                {
            if(res.status==1)
            {
             $scope.status=res.status;
             var data = {};
            $scope.message="Updated SuccessFully";
            preService.getStories(data).then(function(res)
            {
                $scope.Stories= res;
                     initController();
                          $scope.success=true;
                   // $scope.$dismss("nth")
                   $timeout( function(){
                     $scope.success=false;
                     $('#Storymodal').modal('hide');
                 }, 2000 );
               
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
        window.alert('hi');
    }
      
});