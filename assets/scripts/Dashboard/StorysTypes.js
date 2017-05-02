
app.controller('StorysTypesCntrl',function($rootScope,$scope,$localStorage,localData,preService){
      $rootScope.session = localData.get();
     $scope.StorysTypes={};
      var data = {};
       preService.StoryTypeget(data).then(function(res) {
           $scope.StorysTypes= res;

         },function(err) {

             window.alert("err");
         });  
    
      $scope.onSubmit=function()
    {
          
                 window.alert('hi');
       var Eventdata=$scope.StorysTypes;
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
        Eventdata.created_date='';
        window.alert(Eventdata.created_by);
        var data = Eventdata;
           preService.StoryTypeinsert(data).then(function(res) {
           if(res.status==1)
           {
                var data = {};
            preService.StoryTypeget(data).then(function(res)
            {
                $scope.StorysTypes= res;
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
