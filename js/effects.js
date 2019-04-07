// Menu

// Button click effects
$( document ).ready(function() {
    $(".button").click(function() {
      
      $(this).css("border", "solid cyan 1pt");
      $(this).css("color", "cyan");
      setTimeout(function() {
          $(".button").css("border", "solid white 1pt");
          $(".button").css("color", "white");
      },300);
    });
  });