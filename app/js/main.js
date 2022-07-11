
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

   var mixer = mixitup('.popular__menu');
  
})