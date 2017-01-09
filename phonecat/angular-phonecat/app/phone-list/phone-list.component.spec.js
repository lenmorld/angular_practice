describe('phoneList', function() {

  //before each test load this module
  beforeEach(module('phoneList'));

  // test te controller
  describe('PhoneListController', function() {

  		// Angular provides the $componentController service to retrive and instantiate a component's controller	
	  it('should create a `phones` model with 3 phones', inject(function($componentController) {

	  	var ctrl = $componentController('phoneList');

	  	expect(ctrl.phones.length).toBe(3);
	  }));
  });
});