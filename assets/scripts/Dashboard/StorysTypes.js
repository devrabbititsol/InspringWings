
app.controller('StorysTypesCntrl',function($rootScope,$scope,$state,$http,httpService,$localStorage,localData){
      $rootScope.session = localData.get();
      var url = "http://devrabbit.com/inspiring_wings/web_services/story_categories.php";
      var data = {};
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
       httpService.httpRequest(url, "P", data,headers).then(function(res) {
           $scope.StorysTypes= res;

         },function(err) {

             window.alert("err");
         });  
});
