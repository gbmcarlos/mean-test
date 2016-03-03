/**
 * Created by gbmcarlos on 3/3/16.
 */

ComparatorModule.factory('ComparatorService', ['$http', function($http){

    var p = {

        quickFilters: [
            {
                label: 'Shari’ah Compliant Only',
                value: 'islamic_finance',
                state: false
            },
            {
                label: 'No Annual Fee',
                value: 'monthly_fee',
                state: false
            },
            {
                label: 'Offered For Non-Listed Companies',
                value: 'cnl_product',
                state: false
            }
        ],

        sorters: [
            {
                label: 'Rate',
                value: 'interestRate',
                order: 0
            },
            {
                label: 'Min Salary',
                value: 'creditCard.minSalary',
                order: 0
            },
            {
                label: 'Annual Fee',
                value: 'annualFee',
                order: 0
            },
            {
                label: 'FX Rate',
                value: 'creditCard.fxRate',
                order: 0
            }
        ],

        creditCardsTypes: [
            {
                label: 'Select a feature',
                value: '',
                selected: true
            },
            {
                label: 'Cashback',
                value: 'cashback'
            },
            {
                label: 'Balance Transfer',
                value: 'balance-transfer'
            },
            {
                label: 'Air Miles',
                value: 'airlines'
            },
            {
                label: 'Dining Privileges',
                value: 'dining'
            },
            {
                label: 'Golf Privileges',
                value: 'golf'
            },
            {
                label: 'Valet Parking',
                value: 'valet'
            },
            {
                label: 'Cinema Tickets',
                value: 'cinema'
            }
        ]

    };

    return {

        get: function(list) {

            if (!!p[list]) {
                return p[list];
            } else {
                throw "Parameters list '" + list + "' not found";
            }

        },

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