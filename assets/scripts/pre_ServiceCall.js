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

        this.Storyget=function(data){
      var url = "http://devrabbit.com/inspiring_wings/web_services/stories.php";
      var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
        this.Storyinsert=function(data){
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
  });
