//= require jquery
//= require bootstrap
//= require_tree .
// $(function(){  // $(document).ready shorthand
//   $('.work-header').fadeIn('slow');
// });

$(document).ready(function() {

$(function(){  // $(document).ready shorthand
  $('.work-header').fadeIn('slow');
});

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            const bottom_of_object = $(this).position().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});
