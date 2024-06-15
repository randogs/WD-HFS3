$(document).ready(function() {
  var menu = "close";
  $(".menu-toggle").click(function() {
      var mobileNav = $(this).next(".mobile-nav");
      if (menu === "close") {
          mobileNav.fadeIn(300); 
          menu = "open";
      } else {
          mobileNav.fadeOut(200); 
          menu = "close";
      }
  });
});
