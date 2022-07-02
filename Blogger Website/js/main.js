const responsive = {
    0: {
        items:1
    },
    520:{
        items:2
    },
    920:{
        items:3
    },
    1320:{
        items:4
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
        
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive

    });

    $('.move-up span').click(function(){
        $('html , body').animate({
            scrollTop:0
        },1500);
    });
});

