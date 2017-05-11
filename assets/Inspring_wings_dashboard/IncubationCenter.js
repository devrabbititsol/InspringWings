app.controller('incubationCenterCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id;
$rootScope.username = geetingdata.first_name; 
    
$scope.Incubationdata={};
var data = {'is_active':'1'};
    $scope.pager={};
$scope.loading=true;
//Get stories
    
    
      preService.getIncubations(data).then(function(res) {
           $scope.Incubations= res;
          initController();
         },function(err) {
             window.alert("err");
         });
        function initController() {
              // initialize to page 1
             $scope.setPage(1);
          }
          $scope.setPage=function(page) {
           // alert("set");
              if (page < 1 || page > $scope.pager.totalPages) {
                  return;
              }
              $scope.pager =PaginationService.pagination( $scope.Incubations.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.Incubations.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
          }
     preService.getIncubationsTypes(data).then(function(res) {
           $scope.IncubationsTypes= res;
         },function(err) {
             window.alert("err");
         });
      $scope.addinfo=function()
      {
            $scope.Incubationmodal="#Incubationmodal";
            $scope.title="Add New";
            $scope.message="";
           $scope.Incubationdata={};
            $scope.Incubation.$setPristine();
         if ($scope.Incubation.$valid) { } 
    $scope.onSubmit=function()
        {
        
        
        var Incubationsadd=$scope.Incubationdata;
        var sessiondata=$rootScope.session;
        var gettingdata=sessiondata.response_info[0];
        var userdata=gettingdata.user_id;
        Incubationsadd.created_by=userdata;
        Incubationsadd.incubation_center_id='0';
        if(Incubationsadd.is_active == true){
         // opportunityDate.is_active ="1";
        }
        else if(Incubationsadd.is_active == false || Incubationsadd.is_active == undefined){
         Incubationsadd.is_active ="0";
        }
        else{

        }
        var data = Incubationsadd;
           preService.addIncubations(data).then(function(res) {
           if(res.status==1)
           {
             $scope.message="Inserted successfully";
             var data = {'is_active':'1'};
                preService.getIncubations(data).then(function(res)
                {
                    $scope.Incubations= res;
                    initController();
               $('#Incubationmodal').modal('hide');
                },
            function(err)
            {
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
     
       }


//Edit Story
      $scope.editInfo=function(Incubation)
    {
               $scope.Incubationmodal="#Incubationmodal";
                $scope.title="Edit";
                $scope.message="";
               $scope.Incubationdata=Incubation;
               $scope.onSubmit=function()
            {
                 var Incubationsedit=$scope.Incubationdata;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
                 Incubationsedit.created_by=userdata;
                 if(Incubationsedit.is_active == true){
                  // opportunityDate.is_active ="1";
                 }
                 else if(Incubationsedit.is_active == false || Incubationsedit.is_active == undefined){
                  Incubationsedit.is_active ="0";
                 }
                 else{

                 }
                 var data = Incubationsedit;
                preService.addIncubations(data).then(function(res)
                {
            if(res.status==1)
            {
             $scope.status=res.status;
             var data = {'is_active':'1'};
            $scope.message="Updated SuccessFully";
            preService.getIncubations(data).then(function(res)
            {
                $scope.Incubations= res;
                     initController();
                     $('#Incubationmodal').modal('hide');
            },function(err) {
             window.alert("err");
            });
           }
        else{
            window.alert("err");
         $scope.message="Invalid Data";
            }
                 },function(err) {
                     window.alert("err");
                 });

            }
    }
      
      
//Delete Story
      
      
    $scope.deleteInfo=function(Incubation)
    {
         var result = confirm("Want to Delete ?");
             
             if(result == true){
             
             $scope.Incubationdata=Incubation;
               var Incubationdelete=$scope.Incubationdata;
                 var sessiondata=$rootScope.session;
                 var geetingdata=sessiondata.response_info[0];
                 var userdata=geetingdata.user_id;
                 Incubationdelete.created_by=userdata;
                 delete Incubationdelete.is_active;
                 Incubationdelete.is_active='0';
                 var data = Incubationdelete;
                preService.addIncubations(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.getIncubations(data).then(function(res)
            {
                $scope.Incubations= res;
                     initController();
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
             else{}
    }

});
