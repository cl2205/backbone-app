App.Views.FormPt2View = Backbone.View.extend({
  initialize: function(options) {
    this.model = options.model;
    this.collection = options.collection;
  },

  template: _.template($('#page-2').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  // events to listen for on our view
  events: {
      'click #complete': 'save'
  },

  save: function(e) {
    e.preventDefault();
    // Create a new user with the data in the form
    var newUser = {
      firstname: this.model.get('firstname'),
      lastname: this.model.get('lastname'),
      address1: this.$('#addOne').val(),
      address2: this.$('#addTwo').val(),
      city: this.$('#city').val(),
      state: this.$('#state').val(),
      zipcode: this.$('#zipcode').val(),
    };

    this.model.set(newUser);
    this.collection.add(this.model);
    this.model.save({ user: newUser }, {
      success: function(model, response, options) {
        Backbone.history.navigate('finish', { trigger: true });
      },
      error: function(model, xhr, options) {
        var errors = JSON.parse(xhr.responseText).errors;
        alert('Oops, something went wrong and your info could not be saved: ' + errors);
      }
    });
  }

});
