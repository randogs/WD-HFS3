$(document).ready(function() {
    var menu = "close";
    $(".menu-toggle").click(function() {
      if (menu === "close") {
        $(this).next(".mobile-nav").css("display", "block");
        menu = "open";
      } else {
        $(this).next(".mobile-nav").css("display", "none");
        menu = "close";
      }
    });

  });
