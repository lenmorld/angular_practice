angular.
    module('core').
    filter('checkmark', function() {
        return function (input) {
           return input ? '\u2713' : '\u2718';    // true: checkmark, false: X-mark
        };
});
