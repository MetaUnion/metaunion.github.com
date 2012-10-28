metaunion.Views.applicationView = Backbone.View.extend({

  el: "#gifs",

  template: function(obj){ return "<li><img src='/gifs/" + obj.name + ".gif' height='" + obj.height + "'  width='" + obj.width + "' /></li>";},

  loadImage: function(id){
    var modelLen = this.collection.models.length,
        randID = Math.floor(Math.random()*modelLen),
        model =  this.collection.at(id) || this.collection.at(randID);
    this.render(model);
  },

  render: function(model){
    this.$el.html(this.template(model.attributes));
  }

});
