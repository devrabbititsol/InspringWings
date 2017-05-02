app.controller('StoriesCntrl',function($rootScope,$scope,$localStorage,localData,preService){
//Decleration
$rootScope.session = localData.get();
$scope.Storiesdata={};
var data = {};
//Get stories 
      preService.getStories(data).then(function(res) {
           $scope.Stories= res;
          
         },function(err) {
             window.alert("err");
         });
     preService.getStoryType(data).then(function(res) {
           $scope.Stories_category= res;
         },function(err) {
             window.alert("err");
         });
      $scope.addinfo=function(){
             $scope.Storymodal="#Storymodal";
          $scope.message="";
           $scope.Storiesdata=undefined;
       }
//Insert Story
    $scope.onSubmit=function()
    {
        var stories=$scope.Storiesdata;
        window.alert(stories.is_active);
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
       
    }
      
});