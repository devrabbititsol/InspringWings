app.service('preService',function($http,httpService,header,webUrl){

        this.register=function(data){
        var url = webUrl.concat("user_register.php");
        //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
        return httpService.httpRequest(url, "P", data,header)
        }

        this.edituser=function(data){
        var url = webUrl.concat("users_action.php");
       //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
        return httpService.httpRequest(url, "P", data,header)
        }

      this.login=function(data){
      var url = webUrl.concat("user_login.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.Eventget=function(data){
      var url = webUrl.concat("events.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.Eventinsert=function(data){
      var url = webUrl.concat("events_action.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getStories=function(data){
      var url = webUrl.concat("stories.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.insertStory=function(data){
      var url = webUrl.concat("stories_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.allOpportunities=function(data){
      var url = webUrl.concat("opportunities.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P",data,header)
      }

      this.addORUpdateOpp=function(data){
      var url =webUrl.concat("opportunities_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getAllOpp_categories=function(data){
      var url =webUrl.concat("opportunity_categories.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};

      return httpService.httpRequest(url, "P", data,header)
      }

      this.addNewOpp_categories=function(data){
      var url =webUrl.concat("opportunity_categories_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
     }

      this.getStoryType=function(data){
      var url = webUrl.concat("story_categories.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.insertStoryType=function(data){
      var url = webUrl.concat("story_categories_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getUsers=function(data){
      var url = webUrl.concat("users.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.addOrUp_Users=function(data){
      var url = webUrl.concat("users_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getTestimonials=function(data){
      var url = webUrl.concat("testimonials.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.addOrUp_Testimonials=function(data){
      var url = webUrl.concat("testimonials_action.php");
  //    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.allRequest=function(data){
      var url = webUrl.concat("requests.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.addOrUp_Request=function(data){
      var url = webUrl.concat("requests_action.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getQuotes=function(data){
      var url = webUrl.concat("quotes.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }
         this.addtakeupproblem=function(data){
      var url = webUrl.concat("request_takeup_action.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }
        this.takeupcomments=function(data){
      var url = webUrl.concat("takeup_comments.php");
    //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getIncubations=function(data){
      var url = webUrl.concat("incubation_centers.php");
//    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
     }

      this.addIncubations=function(data){
      var url = webUrl.concat("incubation_centers_action.php");
//   var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.getIncubationsTypes=function(data){
      var url = webUrl.concat("incubation_categories.php");
//    var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }

      this.addIncubationsTypes=function(data){
        var url = webUrl.concat("incubation_categories_action.php");
      //  var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
        return httpService.httpRequest(url, "P", data,header)
        }
      this.changePassword=function(data){
        var url = webUrl.concat("change_password_action.php");
      //   var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
          return httpService.httpRequest(url, "P", data,header)
         }
      this.forgotPassword=function(data){
      var url = webUrl.concat("forgot_password.php");
      //var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,header)
      }
});
