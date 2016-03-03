/**
 * Created by gbmcarlos on 3/3/16.
 */

ComparatorModule.factory('ComparatorService', ['$http', function($http){

    return {
        
        getResults: function(params, successCallback, errorCallback) {

            $http({
                method: 'GET',
                url: '/api-wrapper',
                params: params
            }).then(function (response) {

                if (response.status == 200) {

                    var data = JSON.parse(JSON.parse(response.data)).data;
                    if (!!successCallback) {

                    }
                    successCallback(data.count, data.data);

                } else {
                    if (!!errorCallback) {
                        errorCallback();
                    }
                }

            });

        }
    };

}]);