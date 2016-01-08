(function() {
    'use strict';

    angular.module('main', [])
        .controller('RunCtrl', ['$http', function($http){
            var self = this;
            $http.get('/customer').success(function(data){
                self.customers = data;
            });
        }]);
})()
