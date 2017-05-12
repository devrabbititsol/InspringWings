app.controller('testimonialmainCntrl',function($rootScope,$scope,$localStorage,localData,preService,PaginationService){
    var data={'is_active':'1'};
$scope.pager={};
$scope.pageSize=6;
    
    
        preService.getTestimonials(data).then(function(res)
        {
            $scope.Testimonials= res;
             
        },
        function(err)
        {
           window.alert("err");
         });
                  
     
});



