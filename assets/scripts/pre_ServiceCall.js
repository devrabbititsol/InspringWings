app.service('preService',function($http,httpService){

      this.login=function(data){
        var url = "http://devrabbit.com/inspiring_wings/web_services/user_login.php";
        var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
        this.Eventget=function(data){
        var url = "http://devrabbit.com/inspiring_wings/web_services/events.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
        this.Eventinsert=function(data){
      var url = "http://devrabbit.com/inspiring_wings/web_services/events_action.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }

        this.getStories=function(data){
      var url = "http://devrabbit.com/inspiring_wings/web_services/stories.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
        this.insertStory=function(data){
      var url = "http://devrabbit.com/inspiring_wings/web_services/stories_action.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
    this.allOpportunities=function(){
      var url = "http://devrabbit.com/inspiring_wings/web_services/opportunities.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      var data ={}
    return httpService.httpRequest(url, "P", data,headers)
    }
   this.addORUpdateOpp=function(data){
     var url ="http://devrabbit.com/inspiring_wings/web_services/opportunities_action.php";
     var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
   return httpService.httpRequest(url, "P", data,headers)
   }
    this.getAllOpp_categories=function(){
      //alert("this");
      var url ="http://devrabbit.com/inspiring_wings/web_services/opportunity_categories.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      var data = {};
    return httpService.httpRequest(url, "P", data,headers)
    }
    this.addNewOpp_categories=function(){
      //alert("this");
      var url ="http://devrabbit.com/inspiring_wings/web_services/opportunity_categories_action.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      var data = {};
    return httpService.httpRequest(url, "P", data,headers)
    }
    this.getStoryType=function(data){
         var url = "http://devrabbit.com/inspiring_wings/web_services/story_categories.php";
          var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
          return httpService.httpRequest(url, "P", data,headers)
        }
    this.insertStoryType=function(data){
     var url = "http://devrabbit.com/inspiring_wings/web_services/story_categories_action.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }

});
