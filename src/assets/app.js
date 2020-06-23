$(function () {
  // ------------------------------------------------------- //
  // Testimonials Slider
  // ------------------------------------------------------ //
  $('.testimonials-slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    smartSpeed: 700,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      }
    }
  });


  // ------------------------------------------------------- //
  // Scroll Top Button
  // ------------------------------------------------------- //
  $('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0}, 1000);
  });

  var c, currentScrollTop = 0,
    navbar = $('.navbar');
  $(window).on('scroll', function () {

    // Navbar functionality
    var a = $(window).scrollTop(), b = navbar.height();

    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;


    if ($(window).scrollTop() >= 750) {
      $('#scrollTop').addClass('active');
    } else {
      $('#scrollTop').removeClass('active');
    }
  });


  // ---------------------------------------------------------- //
  // Preventing URL update on navigation link click
  // ---------------------------------------------------------- //
  $('.link-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


  // ---------------------------------------------------------- //
  // Scroll Spy
  // ---------------------------------------------------------- //
  $('body').scrollspy({
    target: '#navbarSupportedContent',
    offset: 80
  });

  // ------------------------------------------------------- //
  // Navbar Toggler Button
  // ------------------------------------------------------- //
  $('.navbar .navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

});
