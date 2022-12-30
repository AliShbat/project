$(function () {
  "use strict";
  var information = $(".information").innerHeight();
  var navbar = $(".navbar").innerHeight();

  $(".Slider , .carousel-item").height($(window).height()) -
    (information + navbar);
  $(".navbar-nav a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".Featured-work ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "ALL") {
      $(".shuffl .box-img").css("opacity", "1");
    } else {
      $(".shuffl .box-img").css("opacity", "0.2");
      $($(this).data("class")).parent().css("opacity", "1");
    }
  });
});
