app.controller('dashboardcntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
     $rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name; 
});