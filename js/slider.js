$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="btn" class="slick-prev"><img src="../icons/carousel/chevron left solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/chevron right solid.png"></button>',
        responsive:[
            {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
                }
              }
        ]
      });
  });