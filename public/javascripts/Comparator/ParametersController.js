/**
 * Created by gbmcarlos on 3/2/16.
 */

ComparatorModule.controller('ParametersController', ['$scope', function($scope) {

    $scope.quickFilters = [
        {
            label: 'Shari’ah Compliant Only',
            value: 'islamic_finance'
        },
        {
            label: 'No Annual Fee',
            value: 'monthly_fee'
        },
        {
            label: 'Offered For Non-Listed Companies',
            value: 'cnl_product'
        }
    ];

    $scope.providers = [
        {
            label: 'ADCB',
            id: '543857e688de100000b05978'
        },
        {
            label: 'ADIB',
            id: '543857e688de100000b059dd'
        },
        {
            label: 'Ajman Bank',
            id: '543857e788de100000b05afb'
        },
        {
            label: 'Al Hilal Bank',
            id: '543857e788de100000b05b0b'
        },
        {
            label: 'Al Khaliji France',
            id: '543857e688de100000b059f9'
        },
        {
            label: 'AMEX',
            id: '566e6e76b2c18f11375a1cc0'
        }
    ];

}]);