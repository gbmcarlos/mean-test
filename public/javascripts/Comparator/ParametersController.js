/**
 * Created by gbmcarlos on 3/2/16.
 */

ComparatorModule.controller('ParametersController', ['$scope', '$http', function($scope, $http) {

    $scope.requestData = {
        apiCountry: 'ae',
        apiLanguage: 'en',
        categoryId: '543857a388de100000ae90bb',
        categoryName: 'credit-cards',
        filter: {
            quickFilter: [],
            features: 'cashback',
            category: 'credit-cards',
            userSalary: '0',
            email_address: ''
        },
        limit: 25,
        order: false,
        pageNum: 0,
        skip: 0
    };

    $scope.addQuickFilter = function(value, state) {

        if (state) {
            $scope.requestData.filter.quickFilter.push(value);
        } else {
            $scope.requestData.filter.quickFilter.splice(requestData.filter.quickFilter.indexOf(value), 1);
        }

    };

    $scope.getResults = function() {

        var params = JSON.parse(JSON.stringify($scope.requestData));

        if (params.filter.quickFilter.length < 1) {
            delete params.filter.quickFilter;
        }

        //if (params.filter.providers.length < 1) {
        //    delete params.filter.providers;
        //}

        $http({
            method: 'GET',
            url: '/api-wrapper',
            params: $scope.requestData
        }).then(function (response) {

            if (response.status == 200) {

                var data = JSON.parse(JSON.parse(response.data)).data;
                $scope.count = data.count;
                $scope.results = data.data;

            } else {
                (function() {
                    console.log('ERROR');
                })()
            }

        });

    };

    $scope.quickFilters = [
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
    ];
/*
    $scope.providers = [
        {
            label: 'ADCB',
            id: '543857e688de100000b05978',
            state: false
        },
        {
            label: 'ADIB',
            id: '543857e688de100000b059dd',
            state: false
        },
        {
            label: 'Ajman Bank',
            id: '543857e788de100000b05afb',
            state: false
        },
        {
            label: 'Al Hilal Bank',
            id: '543857e788de100000b05b0b',
            state: false
        },
        {
            label: 'Al Khaliji France',
            id: '543857e688de100000b059f9',
            state: false
        },
        {
            label: 'AMEX',
            id: '566e6e76b2c18f11375a1cc0',
            state: false
        }
    ];
*/

    $scope.creditCardsTypes = [
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
    ];

}]);