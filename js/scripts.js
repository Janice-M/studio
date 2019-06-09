$(document).ready(function() {

  $(".whatwedo p").hide();

  $('.whatwedo img').click(function() {
    $(".whatwedo img").toggle();
    $(".whatwedo p").toggle();
});
$('.whatwedo p').click(function() {
  $(".whatwedo img").toggle();
  $(".whatwedo p").toggle();
});

});
