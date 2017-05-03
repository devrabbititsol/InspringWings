app.controller('logoutCntrl',function($rootScope,$scope,$state,$localStorage,localData){

     $scope.logout = function() {
     $localStorage.$reset();
     $rootScope.session='';
    $state.go("Home");
     }

});
