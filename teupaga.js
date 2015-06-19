(function ($){
  Drupal.behaviors.teupaga = { attach: function(context, settings){

    //BURGER
    jQuery('.burger-global').click(function(){
      $(this).toggleClass('open');
    });

    //MENU
    jQuery('#main-menu ul').removeClass('inline');

    //BACK TO TOP
    jQuery('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},'slow');
      return false;
    });


  
  }}

})(jQuery);
