var App = App || {};

App._tooltips = function() {
  if ($(window).width() > 768) {
    if (App._isWithTooltips) return
    App._isWithTooltips = true
    $('[data-toggle="tooltip"]').tooltip()

  } else {
    if (!App._isWithTooltips) return
    App._isWithTooltips = false
    $('[data-toggle="tooltip"]').tooltip('destroy')
  }
}

$(function() {
  App._isWithTooltips = false;
  App._tooltips();
  $(window).on('resize', App._tooltips);
})
