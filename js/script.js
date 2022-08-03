
$(document).ready(function(){
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    /*$('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
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