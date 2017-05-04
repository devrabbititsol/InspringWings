app.controller('viewMyReqCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
 $rootScope.session = localData.get();
    
$scope.loading=true;

  });
