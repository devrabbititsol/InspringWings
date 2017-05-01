app.controller('logoutCntrl',function($rootScope,$scope,$state,$localStorage,localData){

     $scope.logout = function() {
     $localStorage.$reset();
    $state.go("Home");
     }

});
