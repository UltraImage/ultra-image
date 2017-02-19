/*
 Theme Name: Slight Business
 Theme URL: http://www.themewar.com/html/sb
 Author: Themewar
 Author URI: http://www.themewar.com
 Description: Slight Business  - Responsive Corporate Site Template
 Version: 1.0
 */

(function() {
  'use strict';
  var happyCustomers = 1600,
    twitees = 0,
    instagramers = 0,
    likes = 0;

  //========================
  // Loader
  //========================
  if ($(".loaderWraper").length > 0) {
    $(window).load(function() {
      $(".loaderWraper").delay(500).fadeOut("slow");
    });
  }

  //========================
  // Likes/Followers Loader
  //========================
  getHappyCustomers();

  //========================
  // NAV Menu Controller
  //========================
  var menutoggle = true;
  $(".menuToggle").click(function(e) {
    e.preventDefault();
    if (menutoggle) {
      $(this).addClass('active');
      $(".menu").slideDown('slow');
      menutoggle = false;
    }
    else {
      $(this).removeClass('active');
      $(".menu").slideUp('slow');
      menutoggle = true;
    }
  });
  var menutoggle = true;
  $(".menuToggle").click(function(e) {
    e.preventDefault();
    if (menutoggle) {
      $(this).addClass('active');
      $(".inner-nav").slideDown('slow');
      menutoggle = false;
    }
    else {
      $(this).removeClass('active');
      $(".inner-nav").slideUp('slow');
      menutoggle = true;
    }
  });
  //=======================================================
  // Skill Chart
  //=======================================================

  if ($(".skill-area").length > 0) {
    $('.skill-area').appear(function() {
      $('.chart').easyPieChart({
        barColor: '#de3c2f',
        trackColor: '#323232',
        scaleColor: false,
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 5,
        size: 270,
        rotate: 0,
        animate: 1500,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    });
  }
  if ($(".hom2-skill-area").length > 0) {
    $('.hom2-skill-area').appear(function() {
      $('.chart2').easyPieChart({
        barColor: '#FFFFFF',
        trackColor: '#323232',
        scaleColor: false,
        scaleLength: 5,
        lineCap: '',
        lineWidth: 5,
        size: 200,
        rotate: 0,
        animate: 1500,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    });
    $('.hom2-skill-area').appear(function() {
      $('.chart3').easyPieChart({
        barColor: '#FFFFFF',
        trackColor: '#16a4d6',
        scaleColor: false,
        scaleLength: 5,
        lineCap: '',
        lineWidth: 5,
        size: 200,
        rotate: 0,
        animate: 1500,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    });
    $('.hom2-skill-area').appear(function() {
      $('.chart4').easyPieChart({
        barColor: '#FFFFFF',
        trackColor: '#DE3C2F',
        scaleColor: false,
        scaleLength: 5,
        lineCap: '',
        lineWidth: 5,
        size: 200,
        rotate: 0,
        animate: 1500,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });
    });
  }

  //=======================================================
  // Gallery Mixing
  //=======================================================
  if ($('#Grid').length > 0) {
    $('#Grid').themeWar();
  }

  //=======================================================
  // Fun Fact Counter
  //=======================================================
  $('.timer').appear(function() {
    var $this = $(this);
    setTimeout(function() {
      $({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter));
        }
      });
    }, 500);
  });

  //========================================================
  // Preset Animate
  //========================================================
  if ($(".presetArea").length > 0) {
    var presetToggle = true;
    $(".switch").click(function(e) {
      e.preventDefault();
      if (presetToggle) {
        $(".presetArea").animate({ 'right': '0px' }, 400);
        presetToggle = false;
      }
      else {
        $(".presetArea").animate({ 'right': '-290px' }, 400);
        presetToggle = true;
      }
    });
  }

  //========================================================
  // Mobile Menu
  //========================================================
  if ($(".menuToggle").length > 0) {
    var menuToggle = true;
    $(".menuToggle").click(function(e) {
      e.preventDefault();
      if (menuToggle) {
        $("nav.menu").slideDown('slow');
        $("body").css('overflow-x', 'hidden');
        $(".header-area").css({ 'overflow': 'visible' });
        menuToggle = false;
      }
      else {
        $("nav.menu").slideUp('slow');
        $("body").css('overflow', 'auto');
        $(".header-area").css({ 'overflow': 'hidden' });
        menuToggle = true;
      }
    });

    var submenuToggle = true;
    if ($(window).width() < 767) {
      $(".has_sub_menu > a").click(function(e) {
        e.preventDefault();
        $(this).next(".drop-menu").slideToggle('slow');
      });
    }
  }

  if ($(".inerPageheader").length > 0 && $(window).width() > 480) {
    var innerHeader = true;
    $(".inerPageheader .menuToggle").click(function(e) {
      e.preventDefault();
      if (innerHeader) {
        $(".inner-nav").slideDown('slow');
        innerHeader = false;
      }
      else {
        $(".inner-nav").slideUp('slow');
        innerHeader = true;
      }
    });
  }

  if ($(".inerPageheader").length > 0 && $(window).width() < 481) {
    var innerHeader2 = true;
    $(".inerPageheader .menuToggle").click(function(e) {
      e.preventDefault();
      if (innerHeader2) {
        $(".inner-nav").slideDown('slow');
        innerHeader2 = false;
      }
      else {
        $(".inner-nav").slideUp('slow');
        innerHeader2 = true;
      }
    });
  }

  if ($(".slider-area").length > 0 && $(window).width() > 480) {
    var slider = $(".slider-area").height();

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > slider) {
        if ($(window).width() < 992) {
          $("nav.menu").slideUp('fast');
          $(".header-area").css({ 'overflow': 'hidden' });
          menuToggle = true;
        }
        $(".inerPageheader").removeClass('innerInHome');
        $(".inerPageheader").addClass('hdeaderFix animated fadeInUp');
      }
      else {
        $(".inerPageheader").addClass('innerInHome');
        $(".inerPageheader").removeClass('hdeaderFix animated fadeInUp');
      }
    });
  }
  else {
    $(window).on('scroll', function() {
      if ($(window).width() > 480) {
        if ($(window).scrollTop() > 50) {
          $(".inerPageheader").addClass('hdeaderFix animated fadeInUp');
        }
        else {
          $(".inerPageheader").removeClass('hdeaderFix animated fadeInUp');
        }
      }
    });
  }

  //========================================================
  // Color Preset JS Area
  //========================================================
  if ($(".accentColor").length > 0) {
    $(".accentColor a").click(function(e) {
      e.preventDefault();
      var color = $(this).attr('href');
      $(".accentColor a").removeClass('active');
      $(this).addClass('active');
      $("#colorsSet").attr('href', 'css/colors/' + color + '.css')
    });
  }

  if ($(".layouta").length > 0) {
    $(".layouta").click(function(e) {
      e.preventDefault();
      var layout = $(this).attr('href');
      $('.layouta').removeClass('active');
      $(this).addClass('active');
      $("#layout").attr('href', 'css/layout/' + layout + '.css')
    });
  }

  if ($(".colorChem").length > 0) {
    $(".colorChem a").click(function(e) {
      e.preventDefault();
      var colorsch = $(this).attr('href');
      $('.colorChem a').removeClass('active');
      $(this).addClass('active');
      $("#colorChem").attr('href', 'css/colors/' + colorsch + '.css')
    });
  }
  if ($(".patterns").length > 0) {
    $(".patterns a").click(function(e) {
      e.preventDefault();
      var bg = $(this).attr('href');
      $('.patterns a').removeClass('active');
      $(this).addClass('active');
      $('body').removeClass('bgOne bgTwo bgThree bgFour bgFive');
      $('body').addClass(bg);
    });
  }

  //========================================================
  // Subscribe Form
  //========================================================
  if ($("#subscribeForm").length > 0) {
    $("#subscribeForm").submit(function(e) {
      e.preventDefault();
      $("button i", this).removeClass('icon-pencil').addClass('icon-spin5 animate-spin');
      var email = $("#subs_email").val();
      if (email !== '') {
        $("#subs_email").removeClass('errorInput');
        $.ajax({
          type: "POST",
          url: 'subscribe.php',
          data: { email: email },
          success: function(data) {
            $("#subs_email").val('');
            $("#subs_email").attr('placeholder', 'Successfully Done!');
            $("#subs_email").addClass('successInput');
            $("#subscribeForm button i").removeClass('icon-spin5 animate-spin').addClass('icon-pencil');
          }
        });
      }
      else {
        $("#subs_email").addClass('errorInput');
        $("button i", this).removeClass('icon-spin5 animate-spin').addClass('icon-pencil');
      }
      return false;
    });

  }
  //========================================================
  // Maps
  //========================================================
  if ($("#map").length > 0) {
    var map;

    map = new GMaps({
      el: '#map',
      lat: 46.0642153,
      lng: 14.5237933,
      scrollwheel: false,
      zoom: 16,
      zoomControl: true,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      clickable: false
    });

    map.addMarker({
      lat: 46.0643295835,
      lng: 14.525890171,
    });

  }

  //========================
  // Back To Top
  //========================
  if ($("#backToTop").length > 0) {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 200) {
        $("#backToTop").fadeIn('slow');
      }
      else {
        $("#backToTop").fadeOut('slow');
      }
    });

    $("body, html").on("click", "#backToTop", function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
    });
  }
  //========================
  // Pretty Photo
  //========================
  $("a[data-rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

  //========================
  // WOW INIT
  //========================
  if ($(window).width() > 490) {
    var wow = new WOW({
      mobile: false
    });
    wow.init();
  }

  function getHappyCustomers() {
    setTimeout(function() {
      if (!likes || !twitees || !instagramers) {
        getHappyCustomers();
      }
      var totalHappyCustomers = happyCustomers + likes + twitees + instagramers;
      $('div.happy-customers-div h2.timer').text(totalHappyCustomers);
    }, 100)
  }
})(jQuery);
