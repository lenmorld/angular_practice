angular
    .module('phoneDetail').
    component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$routeParams', 'Phone',
            function PhoneDetailController($routeParams, Phone) {
                var self= this;


                // lesson 13: we didnt rely on future object and
                // data-binding such as in phone-list is not sufficient
                // so here we add a callback to process the server response
                self.phone = Phone.get(
                    {phoneId: $routeParams.phoneId},
                    function (phone) {              // CALLBACK to server response
                        self.setImage(phone.images[0]);
                    }
                );

                //lesson12: gallery widget
                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };


                self.onDblClick = function onDblClick(imageUrl) {
                    alert('You double clicked image: ' + imageUrl);
                };

            }]
        // controller: ['$http','$routeParams',
        //     function PhoneDetailController($http, $routeParams) {
        //         // this.phoneId = $routeParams.phoneId;
        //         var self = this;
        //         self.phoneId = $routeParams.phoneId;
        //
        //         //lesson12: gallery widget
        //         self.setImage = function setImage(imageUrl) {
        //             self.mainImageUrl = imageUrl;
        //         };
        //
        //         //e.g. phones/dell-streak-7.json
        //         $http.get('phones/' + $routeParams.phoneId + '.json').then(function (response) {
        //             self.phone = response.data;
        //
        //             //lesson12: gallery widget
        //             self.setImage(self.phone.images[0]);
        //         });
        //     }
        // ]
});




