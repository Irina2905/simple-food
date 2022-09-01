
$(function(){

   Fancybox.bind('[data-fancybox="gallery"]', {
      caption: function (fancybox, carousel, slide) {
        return (
          `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
        );
      },
    });

   
   $('.reviews__slider').slick({
      
      dots: true,
      arrows:true,
      fade:true,
      autoplay:true,
      autoplaySpeed: 5000,
     
      });

  
    if (window.matchMedia("(max-width: 576px)").matches) {
        
      $('.restoraunt__panel').slick({
      
          dots: true,
          arrows:false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          });
    }
      else{
        $('.restoraunt__panel').slick('unslick');

    }
     
 
   

   var mixer = mixitup('.popular__menu');


   $('.burger, .burger-exit').on('click', function(){
    
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__logo').toggleClass('header__logo--active');
    $('.contact').toggleClass('contact--active');
    $('.burger-exit').toggleClass('burger-exit--active');
    
    // $('.wrapper').toggleClass('wrapper--active');
    
  
  }); 
  

  
})