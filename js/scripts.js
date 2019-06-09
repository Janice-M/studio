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

  $('.whatwedo h3').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });
  $('.whatwedo h3').click(function() {
    $(".whatwedo img.one").toggle();
    $(".whatwedo p.one").toggle();
  });

  $('.wBox.1').hover(
    function() {
      $(".wBox.1 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.1 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.2').hover(
    function() {
      $(".wBox.2 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.2 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.3').hover(
    function() {
      $(".wBox.3 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.3 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.4').hover(
    function() {
      $(".wBox.4 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.4 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.5').hover(
    function() {
      $(".wBox.5 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.5 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.6').hover(
    function() {
      $(".wBox.6 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.6 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.7').hover(
    function() {
      $(".wBox.7 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.7 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });

  $('.wBox.8').hover(
    function() {
      $(".wBox.8 h4").stop().animate({
        "opacity": "1"
      }, 350);
    },
    function() {
      $(".wBox.8 h4").stop().animate({
        "opacity": "0"
      }, 350);
    });


  $('#submitButton').click(function() {
    var name = $('#id_number2').val();
    if ($('#id_number2').val().length > 3) {
      alert(name + ", Thank you for your submission");
    } else {
      alert( "Error");
    };
  });









});
