(function ($){
    'use strict';

// code start

$('.icon i').on('click', function (){
    $('.all').animate({
        right:0
    });
})   

$('.menu-close i').on('click', function (){
    $('.all').animate({
        right:-250
    });
})





}) (jQuery);