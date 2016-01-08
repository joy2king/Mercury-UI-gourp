(function(){
    'use strict';

    angular.module('main', [])
        .controller('CCtrl', function($http){
            var self = this;
            self.users = [];
            self.getUsers = function(){
                $http.get('/customer').success(function(info){
                    self.users = info.users;
                });
            }
            self.newUser = function(user){
                $http.post('/customer', user).success(function(info){
                    if(!info.msg){
                        self.users.push(info.user);
                    } else {
                        console.log(info);
                    }
                });
            }
        });
})();
