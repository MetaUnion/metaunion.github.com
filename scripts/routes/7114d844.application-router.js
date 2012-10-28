metaunion.Routers.ApplicationRouter = Backbone.Router.extend({
  routes: {
    "*imageid" : "load"
  },

  initialize: function() {
    var collection = new metaunion.Collections.ApplicationCollection();
    this.view = new metaunion.Views.applicationView({collection: collection});
  },

  load: function(id){
    this.view.loadImage(id);
  }
});
