#= require_tree ./vendor
#= require_tree ./lib

$ ->
  $('.shadow').each ->
    $this = $(@)
    shadow = $("<span class='shadow-text'>#{$this.text()}</span>").appendTo $this

  $('[data-ornament]').each ->
    $this = $(@)
    $this.addClass 'ornament'
    $this.text $this.data('ornament')
