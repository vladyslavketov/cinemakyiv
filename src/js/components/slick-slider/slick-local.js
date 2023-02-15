window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
  $('.projects-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    speed: 1000,
    easing: 'easy',
    autoplay: false,
    autoplaySpeed: 1500,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
    ],
    mobileFirst: true,
  });
});
