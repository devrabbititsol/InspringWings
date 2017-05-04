app.controller('TestimonialsCntrl',function($rootScope,$scope,$state,
  $http,httpService,$localStorage,localData,preService,PaginationService,$timeout){

     $scope.letterLimit = 18;
     $scope.testimonial ={};
     $scope.loading=true;
     $scope.pager={};
     preService.getTestimonials().then(function(res) {
     $scope.testimonials= res;
     initController();
     },function(err) {
       window.alert("err");
     });

     function initController() {
           // initialize to page 1
          $scope.setPage(1);
      }

     $scope.setPage=function(page) {
     if (page < 1 || page > $scope.pager.totalPages) {
         return;
      }

         $scope.pager =PaginationService.pagination( $scope.testimonials.length,page);
           //alert(JSON.stringify($scope.pager));
         $scope.items =  $scope.testimonials.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
         $scope.loading=false;
       }

       $scope.addinfo=function(){

          $scope.TestimonialModal="#TestimonialModal";
          $scope.title="Add New";
          $scope.message="";

          $scope.testimonial=null;
       $scope.onSubmit=function()
      {
      //  alert("submit");
      var testimo=$scope.testimonial;
    // alert(JSON.stringify($scope.testimonial));
      var sessiondata=$rootScope.session;
      var gettingdata=sessiondata.response_info[0];
      var userdata=gettingdata.user_id;
      testimo.created_by=userdata;
      testimo.story_id='0';
      if(testimo.is_active == true){
       // opportunityDate.is_active ="1";
      }
      else if(testimo.is_active == false || testimo.is_active == undefined){
       testimo.is_active ="0";
      }
      else{

      }
    //  var data = stories;
         preService.addOrUp_Testimonials(testimo).then(function(res) {
         if(res.status==1)
         {
           $scope.message="Inserted successfully";
           var data = {'is_active':'1'};
              preService.getTestimonials(data).then(function(res){
                  $scope.testimonials= res;
                  initController();
                 $('#TestimonialModal').modal('hide');
              },
             function(err){
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


     $scope.editInfo=function(Story)
          {
            $scope.TestimonialModal="#TestimonialModal";
               $scope.title="Edit";
               $scope.message="";
              $scope.testimonial=Story;
              $scope.onSubmit=function()
           {
                var testimo=$scope.testimonial;
                var sessiondata=$rootScope.session;
                var geetingdata=sessiondata.response_info[0];
                var userdata=geetingdata.user_id;
                testimo.created_by=userdata;
                if(testimo.is_active == true){
                 // opportunityDate.is_active ="1";
                }
                else if(testimo.is_active == false || testimo.is_active == undefined){
                 testimo.is_active ="0";
                }
                else{

                }

               preService.addOrUp_Testimonials(testimo).then(function(res)
               {
           if(res.status==1)
           {
            $scope.status=res.status;
            var data = {'is_active':'1'};
           $scope.message="Updated SuccessFully";
           preService.getTestimonials(data).then(function(res)
           {
               $scope.testimonials= res;
                    initController();
                    $('#TestimonialModal').modal('hide');
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


   $scope.deleteInfo=function(Story){

   var result = confirm("Want to Delete ?");

   if(result == true){

       $scope.Storiesdata=Story;
       var Eventdata=$scope.Storiesdata;
       var sessiondata=$rootScope.session;
       var geetingdata=sessiondata.response_info[0];
       var userdata=geetingdata.user_id;
       Eventdata.created_by=userdata;
       delete Eventdata.is_active;
       Eventdata.is_active='0';
       var data = Eventdata;
      preService.addOrUp_Testimonials(data).then(function(res)
      {
        if(res.status==1){

      var data = {'is_active':'1'};
       preService.getTestimonials(data).then(function(res){

        $scope.Stories= res;
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


$scope.DescInfo=function(desc){
  $scope.DescModal="#DescModal";
  $scope.descripton= desc;
}




  });
