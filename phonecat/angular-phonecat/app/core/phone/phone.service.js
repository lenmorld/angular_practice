angular.
    module('core.phone').
    factory('Phone', ['$resource',
        function($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            });
        }]);

/*
    module API to register a custom service using factory function
    pass 'Phone' service and factory function
    factory function
        - similar to controller constructor where both can declare dependencies
        to be injected via arguments
    Phone service
        - declares a dependency on the $resource service (ngResource module)


 */