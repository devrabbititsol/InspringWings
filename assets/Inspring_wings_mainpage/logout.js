app.controller('logoutCntrl',function($rootScope,$scope,$state,$localStorage,localData){

     $scope.logout11 = function() {
     $localStorage.$reset();
         $rootScope.session='';
      $rootScope.memebers=true;
    $state.go("Home");
         
         
        
     }

});
