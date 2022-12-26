$(window).on('resize', function() {

    if ($(window).width() <=900) {
        $(".c-point__list").slick({
        
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                  }
                },{
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                  }
                }
            ]
          });
    }
    if($(window).width() <=767) {
      $(".c-col__bottom").slideUp();
$(".c-col__button").click(function (e) {
    $(this).prev().slideToggle(); 
});
    }
})

$(".c-point__itembutton").click(function(){
 $(".c-point__itemlayer").toggleClass("is-active");
})

$(".c-headersp__toggle").click(function() {
  $(".c-headersp__bg").toggleClass("is-active");
  $(".c-headersp__close").toggleClass("is-active");
  if ($(".c-headersp__bg").hasClass("is-active")) {
    $("body").addClass("overflow");
} else {
    $("body").removeClass("overflow");
}
})