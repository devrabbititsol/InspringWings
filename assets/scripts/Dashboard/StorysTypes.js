
app.controller('StorysTypesCntrl',function($rootScope,$scope,$localStorage,localData,preService){
      $rootScope.session = localData.get();
      var data = {};
       preService.StoryTypeget(data).then(function(res) {
           $scope.StorysTypes= res;

         },function(err) {

             window.alert("err");
         });  
});
