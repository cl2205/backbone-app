App.Models.User = Backbone.Model.extend({

  defaults: {
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: ''
  },

  validate: function(attrs) {
    var errors = {};
    if (!attrs.firstname) errors.firstname = 'First Name is required.';
    if (!attrs.lastname) errors.lastname = 'Last Name is required.';
    if (!attrs.address1) errors.address1 = 'Address is required.';
    if (!_.isEmpty(errors)) return errors;
  }

});
