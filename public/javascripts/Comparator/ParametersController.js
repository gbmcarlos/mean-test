/**
 * Created by gbmcarlos on 3/2/16.
 */

ComparatorModule.controller('ParametersController', ['$scope', '$http', function($scope, $http) {

    $scope.requestData = {
        filter: {
            quickFilter: [],
            providers: []
        },
        email_address: $scope.emailAddress,
        features: '',
        userSalary: '',
        apiCountry: 'ae',
        apiLanguage: 'en',
        categoryId: '543857a388de100000ae90bb',
        limit: 25,
        pageNum: 0,
        order: false
    };

    $scope.addQuickFilter = function(value, state) {

        if (state) {
            $scope.requestData.filter.quickFilter.push(value);
        } else {
            $scope.requestData.filter.quickFilter.splice(requestData.filter.quickFilter.indexOf(value), 1);
        }

    };

    $scope.addProvider = function(value, state) {


        if (state) {
            $scope.requestData.filter.providers.push(value);
        } else {
            $scope.requestData.filter.providers.splice(requestData.filter.providers.indexOf(value), 1);
        }

    };

    $scope.getResults = function() {

        $http({
            method: 'GET',
            url: '/api-wrapper',
            params: $scope.requestData
        }).then(function successCallback(response) {
            console.log(response);
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