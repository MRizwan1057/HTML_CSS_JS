$(document).ready(function () {
  // Accordions
  $(".accordion-items").on("click", ".accordion-heading", function () {
    $(this).toggleClass("active").next().slideToggle();

    $(".accordion-content").not($(this).next()).slideUp(300);

    $(this).siblings().removeClass("active");
  });

  // Testim Slider

  $(".testim_slider").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });

  // Industry Slider

  $(".ind_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });
});
