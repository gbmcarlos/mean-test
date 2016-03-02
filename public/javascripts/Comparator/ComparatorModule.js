/**
 * Created by gbmcarlos on 3/2/16.
 */
var ComparatorModule = angular.module('Comparator', []);

ComparatorModule.filter('shorten', function() {
    return function(input, length) {
        console.log(!!input ? input.trim().substr(0, length) : '');
        return !!input ? input.trim().substr(0, length) + '...' : '';
    }
});
