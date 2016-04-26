var App = {
    Views: {},
    Models: {},
    Router: {},
    start: function() {
      Backbone.history.start();
    }
};

$(document).ready(function(){
    App.Router.Instance = new App.Router();
    App.start();
});
