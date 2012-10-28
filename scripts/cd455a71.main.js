
window.metaunion = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  fixtures: [
    {name: "gif1", width: 500, height: 293},
    {name: "gif2", width: 500, height: 300},
    {name: "gif3", width: 500, height: 288},
    {name: "gif4", width: 500, height: 213},
    {name: "gif5", width: 500, height: 288}
  ],
  init: function() {
    var router = new this.Routers.ApplicationRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  metaunion.init();
});
