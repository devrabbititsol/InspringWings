
app.controller('incubationCenterCategoryCntrl',function($rootScope,$scope,$localStorage,localData,preService,$timeout,PaginationService){
//Decleration
$rootScope.session = localData.get();
var sessiondata=$rootScope.session;
var geetingdata=sessiondata.response_info[0];
$rootScope.userType = geetingdata.role_id ;
$rootScope.username = geetingdata.first_name;
    
    
$scope.IncubationTypesdata={};
var data = {'is_active':'1'};
$scope.pager={};
$scope.loading=true;
//Get StoryType
       preService.getIncubationsTypes(data).then(function(res)
        {
           $scope.IncbationTypes= res;
           initController();
         },
        function(err)
        {
             window.alert("error");
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
              $scope.pager =PaginationService.pagination( $scope.IncbationTypes.length,page);
              //alert(JSON.stringify($scope.pager));
               $scope.items =  $scope.IncbationTypes.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
              $scope.loading=false;
          }
//Add Action
   $scope.addinfo=function()
           {
             $scope.IncbationTypeModal="#IncbationTypeModal";
             $scope.title="Add New";
             $scope.message="";
             $scope.IncubationTypesdata=null;
             $scope.IncubationType.$setPristine();
             if ($scope.IncubationType.$valid) { }
    $scope.onSubmit=function()
        {
            var addIncubationType=$scope.IncubationTypesdata;
            var sessiondata=$rootScope.session;
            var gettingdata=sessiondata.response_info[0];
            var userdata=gettingdata.user_id;
            addIncubationType.created_by=userdata;
            addIncubationType.story_category_id='0';
            if(addIncubationType.is_active == true){
             // opportunityDate.is_active ="1";
            }
            else if(addIncubationType.is_active == false || addIncubationType.is_active == undefined){
             addIncubationType.is_active ="0";
            }
            else{

            }
            var data = addIncubationType;
            preService.addIncubationsTypes(data).then(function(res)
            {
               if(res.status==1)
               {
                    $scope.message="Inserted successfully";
                    var data = {'is_active':'1'};
                    preService.getIncubationsTypes(data).then(function(res)
                    {
                        $scope.IncbationTypes= res;
                        initController();
                         $('#IncbationTypeModal').modal('hide');

                    },
                    function(err)
                    {

                     window.alert("err");
                    });
               }
                else
                {
                    window.alert("err");

                }
           },
           function(err)
            {

                 window.alert("err");
            });
    }
             
           }

 //Edit StoryType
      $scope.editInfo=function(IncbationType)
    {
          
      $scope.IncbationTypeModal="#IncbationTypeModal";
      $scope.title="Edit";
      $scope.message="";
      $scope.IncubationTypesdata=IncbationType;
      $scope.onSubmit=function()
      {
            var editIncubationType=$scope.IncubationTypesdata;
         /*   var sessiondata=$rootScope.session;
            var geetingdata=sessiondata.response_info[0];
            var userdata=geetingdata.user_id;
            editIncubationType.created_by=userdata;*/
            if(editIncubationType.is_active == true){
             // opportunityDate.is_active ="1";
            }
            else if(editIncubationType.is_active == false || Eventdata.is_active == undefined){
             editIncubationType.is_active ="0";
            }
            else{

            }
            var data = editIncubationType;

            preService.addIncubationsTypes(data).then(function(res)
            {
                if(res.status==1)
               {
                     $scope.status=res.status;
                    $scope.message="Updated SuccessFully";
                     var data = {'is_active':'1'};
                    preService.getIncubationsTypes(data).then(function(res)
                    {
                        $scope.IncbationTypes= res;
                           initController();
                        $('#IncbationTypeModal').modal('hide');
                    },
                    function(err)
                    {
                     window.alert("err");
                    });
               }
                else
                {
                  window.alert("err");
                  $scope.message="Invalid Data";
                }
            },
            function(err)
            {
                 window.alert("err");
            });

    }

    }
  //Delete StoryType     
   $scope.deleteInfo=function(IncbationType)
    {
         var result = confirm("Want to Delete ?");
             
             if(result == true){
             
             $scope.IncubationTypesdata=IncbationType;
               var deleteincubationtype=$scope.IncubationTypesdata;
                 delete deleteincubationtype.is_active;
                 deleteincubationtype.is_active='0';
                 var data = deleteincubationtype;
                preService.addIncubationsTypes(data).then(function(res)
                {
            if(res.status==1)
            {
                var data = {'is_active':'1'};
            preService.getIncubationsTypes(data).then(function(res)
            {
                $scope.IncbationTypes= res;
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
