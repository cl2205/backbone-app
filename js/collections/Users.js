App.UserCollection = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage('UserCollection'),
  model: App.Models.User
});
