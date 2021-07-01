$(window).on('load', function () {
  $('.loader .inner').fadeOut(700, function () {
    $('.loader').fadeOut(900);
  });
});

$(document).ready(function () {
  // slides
  $('#slides').superslides({
    pagination: false,
  });

  // text typing
  var typed = new Typed('.js--typed', {
    strings: ['Phoenix, AZ'],
    // '<p style="font-size: 120%">Phoenix, AZ <i style="font-size: 100%" class="fab fa-bitcoin"></i> </p>'
    typeSpeed: 120,
    startDelay: 2000,
    showCursor: false,
    contentType: 'html',
  });

  // animations on scroll
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('is-visible animate__fadeIn');
    },
    { offset: '50%' }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('is-visible animate__slideInUp');
    },
    { offset: '50%' }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animate__bounce');
    },
    { offset: '20%' }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('is-visible animate__lightSpeedInRight');
    },
    { offset: '45%' }
  );

  $('.js--wp-5').waypoint(
    function (direction) {
      $('.js--wp-5').addClass('is-visible animate__fadeInLeftBig');
    },
    { offset: '50%' }
  );

  $('.js--wp-6').waypoint(
    function (direction) {
      $('.js--wp-6').addClass('is-visible animate__bounce');
    },
    { offset: '75%' }
  );

  // $('.js--wp-7').waypoint(function (direction) {
  //     $('.js--wp-7').addClass('is-visible animate__backInUp')
  // }, { offset: '60%' });

  // $('.js--wp-8').waypoint(function (direction) {
  //     $('.js--wp-8').addClass('is-visible animate__swing')
  // }, { offset: '50%' });

  $('.js--wp-9').waypoint(
    function (direction) {
      $('.js--wp-9').addClass('is-visible animate__bounce');
    },
    { offset: '50%' }
  );

  // navigation on scroll
  $('.navigation li a').click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    $('html, body').animate({ scrollTop: targetPosition - 175 }, 750);
  });

  // sticky navigation
  $('#topics').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('.navigation').addClass('fixed-nav');
      } else {
        $('.navigation').removeClass('fixed-nav');
      }
    },
    { offset: '125px' }
  );

  // navigation on scroll
  $('.navigation li a').click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    $('html, body').animate({ scrollTop: targetPosition - 175 }, 750);
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeOut: 2500,
    autoplayHoverPause: true,
    items: 4,
    responsive: {
      0: {
        items: 3,
      },
      480: {
        items: 3,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });
});
