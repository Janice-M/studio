$(document).ready(function() {

  $(".whatwedo p").hide();

  $('.whatwedo img').click(function() {
    $('.whatwedo p').show();
    $('.whatwedo img').hide();
    });

    $('.whatwedo p').click(function() {
      $('.whatwedo img').show();
      $('.whatwedo p').hide();
    });

});
