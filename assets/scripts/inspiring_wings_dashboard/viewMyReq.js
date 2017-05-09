app.controller('viewMyReqCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){
 $rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id  ;
 $rootScope.username = geetingdata.first_name;
$scope.loading=true;

  });
