app.factory('httpService', function($http,$q,$log) {
return {
      test:function(){
        var y = 5;
        return y;
      },

      httpRequest: function(url, method, data, headers) {

          var deffered = $q.defer();

          if (method == 'P') {

              $http.post(url, data, {
                  headers: headers
              }).success(function(res) {

                  //window.alert(JSON.stringify(res));
                      deffered.resolve(res);

              }).error(function(error) {

                  //$ionicLoading.hide();
                  //global.setBadRequest();
                  deffered.reject(error);;
              });

          }
          if (method == 'G') {

              $http.get(url, data, {
                  headers: headers
              }).success(function(res) {

                      deffered.resolve(res.data.message);

              }).error(function(error) {

                  //$ionicLoading.hide();
                  //global.setBadRequest();
                  deffered.reject(error);;
              });

          }
          return deffered.promise;
      }
    }
  });
