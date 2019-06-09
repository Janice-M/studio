$(document).ready(function() {

  $(".whatwedo p").hide();

  $('.whatwedo img.one').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo p.one').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo img.two').click(function() {
    $(".whatwedo img.two").toggle();
    $(".whatwedo p.two").toggle();
  });
  $('.whatwedo p.two').click(function() {
    $(".whatwedo img.two").toggle();
    $(".whatwedo p.two").toggle();
  });
  $('.whatwedo img.three').click(function() {
    $(".whatwedo img.three").toggle();
    $(".whatwedo p.three").toggle();
  });
  $('.whatwedo p.three').click(function() {
    $(".whatwedo img.three").toggle();
    $(".whatwedo p.three").toggle();
  });

  $('.portfolio .col-3').hover(function() {

  });
});
