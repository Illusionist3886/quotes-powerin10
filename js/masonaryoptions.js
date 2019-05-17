jQuery(window).on('load', function() {
    $('.grid').masonry({
        columnWidth: 20,
        itemSelector: '.grid-item',
        gutter: 26,
    });

    
  });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoPlay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        margin: 15,
        navText: ['<i class="fas fa-arrow-circle-left fa-2x text-info""></i>','<i class="fas fa-arrow-circle-right fa-2x text-info""></i>'],
        dots: false,
        center: true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
            }
        },
    });
  });


  