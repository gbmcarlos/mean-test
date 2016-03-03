/**
 * Created by gbmcarlos on 3/2/16.
 */

ComparatorModule.controller('ComparatorController', ['$scope', '$http', 'ComparatorService', function($scope, $http, ComparatorService) {

    angular.element(document).ready(function () {
        $scope.getResults();
    });

    $scope.loading = true;
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
            email_address: '',
            order: false,
            sort: ''
        },
        limit: 25,
        order: false,
        pageNum: 1,
        skip: 0
    };

    $scope.addQuickFilter = function(value, state) {

        if (state) {
            $scope.requestData.filter.quickFilter.push(value);
        } else {
            $scope.requestData.filter.quickFilter.splice($scope.requestData.filter.quickFilter.indexOf(value), 1);
        }

        $scope.requestData.pageNum = 1;

        $scope.getResults();

    };

    $scope.getResults = function() {

        var params = JSON.parse(JSON.stringify($scope.requestData));

        if (params.filter.quickFilter.length < 1) {
            delete params.filter['quickFilter'];
        }

        $scope.loading = true;

        ComparatorService.getResults(params, function(count, results) {
            $scope.count = count;
            $scope.results = results;
            $scope.loading = false;
        }, function() {
            console.log('ERROR');
        });

    };

    $scope.sort = function(index) {

        if ($scope.sorting[index].order == 1) {
            $scope.sorting[index].order = 2;
            $scope.requestData.filter.order = 'DESC';
            $scope.requestData.order = false;
        } else if($scope.sorting[index].order == 2) {
            $scope.sorting[index].order = 1;
            $scope.requestData.order = true;
            $scope.requestData.filter.order = 'ASC';
        } else {

            angular.forEach($scope.sorting, function(value, key) {
                value.order = 0;
            });

            $scope.sorting[index].order = 1;
            $scope.requestData.order = true;
            $scope.requestData.filter.order = 'ASC';

        }

        $scope.requestData.filter.sort = $scope.sorting[index].value;
        $scope.requestData.sort = $scope.sorting[index].value;

        $scope.getResults();

    };

    $scope.page = function(index) {

        if ($scope.requestData.pageNum != index+1) {

            $scope.requestData.pageNum = index+1;
            $scope.requestData.skip = index * $scope.requestData.limit;
            $scope.getResults();

        }

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

    $scope.sorting = [
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

    $scope.pagesNum = function() {
        return new Array($scope.count > 0 ? Math.floor($scope.count / $scope.requestData.limit) + 1 : 0);
    }

}]);