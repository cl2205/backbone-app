
App.Router = Backbone.Router.extend({

  routes: {
    '' : 'showFormPt1',
    'p2': 'showFormPt2',
    'finish': 'showFinish'
  },

  initialize: function() {
    this.collection = new App.UserCollection();
    this.model = new App.Models.User();
    this.collection.fetch({ajaxSync: false});
  },

  showFormPt1: function() {
    this.formPt1View = new App.Views.FormPt1View({
      collection: this.collection,
      model: this.model });
    $('#container').html(this.formPt1View.render().el);
  },

  showFormPt2: function() {
    this.formPt2View = new App.Views.FormPt2View({
      collection: this.formPt1View.collection || {},
      model: this.formPt1View.model || {}
    });
    $('#container').html(this.formPt2View.render().el);
  },

  showFinish: function() {
    this.finishView = new App.Views.FinishView();
    $('#container').html(this.finishView.render().el);
  }

});
