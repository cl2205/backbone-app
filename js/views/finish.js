App.Views.FinishView = Backbone.View.extend({
  initialize: function(options) {
  },

  events: {
      'click #addNew': 'showForm'
  },

  template: _.template($('#finish').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  showForm: function(e) {
    e.preventDefault();
    App.Router.Instance.navigate('', {
      trigger: true
    });
  }
});
