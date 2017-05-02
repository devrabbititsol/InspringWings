app.controller('StoriesCntrl',function($rootScope,$scope,$localStorage,localData,preService){
      $rootScope.session = localData.get();
     $scope.Stories={};
      var data = {};
//Get Storys Data
      preService.Storyget(data).then(function(res) {
           $scope.Stories= res;
         },function(err) {
             window.alert("err");
         });
     preService.StoryTypeget(data).then(function(res) {
           $scope.Stories_category= res;
         },function(err) {
             window.alert("err");
         });
      $scope.addinfo=function(){
             $scope.Storymodal="#Storymodal";
           $scope.Storie=null;
       }
//Insert Story
    $scope.onSubmit=function()
    {
        window.alert('hi');
       var Eventdata=$scope.Stories;
        if(Eventdata.is_active==true){
             delete Eventdata.is_active;
         Eventdata.is_active="1";
            
        }
        else{
            Eventdata.is_active="0";
            
        }
        var sessiondata=$rootScope.session;
        var gettingdata=sessiondata.response_info[0];
        var userdata=gettingdata.user_id; 
        Eventdata.created_by=userdata;
       
        window.alert(Eventdata.created_by);
        var data = Eventdata;
           preService.Storyinsert(data).then(function(res) {
           if(res.status==1)
           {
                var data = {};
            preService.Storyget(data).then(function(res)
            {
                $scope.Stories= res;
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
});