app.service('preService',function($http,httpService){
         window.alert("hi");
      this.login=function(data){
        var url = "http://devrabbit.com/inspiring_wings/web_services/user_login.php";
        var headers={"Auth-Key":"55a2bc0181d79fd2db84d5e147698dc7"};
      return httpService.httpRequest(url, "P", data,headers)
    }
  });
