// register phoneList component, on the phoneList module

angular.
	module('phoneList')
	.component('phoneList', {
	    // URL relative to index.html
		templateUrl: 'phone-list/phone-list.template.html',
		controller: ['Phone',
			function PhoneListController(Phone) {
				var allPhones;

				// lesson 13: we replaced the qhole $http.get() with Phone.query
				/*
					no need to pass any callback functions,
					when invoking Phone service methods

					what is returned synchronously is a "future" object
					which will be filled when XHR response is received

					Angular data-binding allows us to use this future and bind it to our template
					and views will be upadted automaticaly when data arrives

				 */
				this.phones = Phone.query();
				this.orderProp = 'age';

				this.changeLimit = function () {
					alert(self.limit);
					self.phones = allPhones.slice(0, self.limit);
				};
			}
		]

		// // simple PhoneListController without Phone service
		// // uses low-level http API
		// controller: ['$http',
		// 	function PhoneListController($http) {
		// 		var allPhones;
		// 		// to use $http service, declare the name as arguments to the constructor function
		// 		var self = this;
		// 		self.sampleText = 'Hey Lenny';
		// 		$http.get('phones/phones.json').then(function (response) {
		// 			// Angular detected JSON response and parsed into data property of the response
		// 			self.phones = response.data;
		// 			allPhones = response.data;
		// 			// self.phones = response.data.slice(0, 5);
		// 		});
        //
		// 		self.changeLimit = function () {
		// 			alert(self.limit);
		// 			self.phones = allPhones.slice(0, self.limit);
		// 		}
        //
		// 		// init. to age ordering
		// 		self.orderProp = 'age';
		// 	}
		// ]
	});