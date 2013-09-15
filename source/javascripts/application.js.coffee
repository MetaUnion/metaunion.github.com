#= require_tree ./vendor
#= require_tree ./lib

create_shadow = (selector) ->
  $(selector).each ->
    $this = $(@)
    shadow = $("<span class='shadow-text'>#{$this.text()}</span>").appendTo $this

position_content = (selector) ->
  $wrap = $(selector)
  $window = $(window)
  topNudge = ($window.height() - $wrap.height()) / 2
  $wrap.css({marginTop: topNudge}) if topNudge > 1

$ ->
  if $(window).width() > 699
    position_content('.wrap')
    create_shadow('.shadow')
