$(document).ready(function () {
  $(".cloud_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".slider_btnLeft"),
    nextArrow: $(".slider_btnRight"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".mobile_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".project_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "100px",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerModePadding: "80px",
        },
      },
    ],
  });

  $(".testim_slider").slick({
    dots: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(".more_less_btn").click(function () {
    $(".service_card .hidden_text").slideToggle();
    if ($(".more_less_btn").text() == "Read More") {
      $(".more_less_btn").text("Read Less");
      $(this).parent(".srevice_card").find(".hidden_text").show();
      $(this).parent(".srevice_card").find("p").css({ background: "yellow" });
    } else {
      $(".more_less_btn").text("Read More");
      // $(this).parent(".srevice_card").find(".hidden_text").hide();
      $(this).parent(".srevice_card").find("p").css({ background: "red" });
    }
  });

  // Animation

  AOS.init();
});
