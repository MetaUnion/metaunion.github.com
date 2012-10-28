metaunion.Collections.ApplicationCollection = Backbone.Collection.extend({

  model: metaunion.Models.ApplicationModel,

  initialize: function(){
    var _this = this;
    _.each(metaunion.fixtures, function(v,k){
      _this.create(v);
    });
  }


});
