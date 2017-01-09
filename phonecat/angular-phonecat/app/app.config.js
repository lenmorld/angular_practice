angular
    .module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            // routes
            // /phones/:phoneId will be handled by phone-detail
            $routeProvider.
            when('/phones', {
                template: '<phone-list></phone-list>'
            })
                .when('/phones/:phoneId', {
                    template: '<phone-detail></phone-detail>'
                }).
            otherwise('/phones');
        }]);