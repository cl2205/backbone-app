App.Views.FormPt1View = Backbone.View.extend({
  initialize: function(options) {
    this.model = options.model;
    this.collection = options.collection;
  },

  template: _.template($('#page-1').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  // events to listen for on our view
  events: {
      'click #nextpage': 'nextPage'
  },

  nextPage: function(e) {
    e.preventDefault();

    this.model.set({
      firstname: this.$('#fname').val(),
      lastname: this.$('#lname').val(),
    });

    App.Router.Instance.navigate("p2", {
      trigger: true
    });
  }
});
