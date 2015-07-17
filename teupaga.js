(function ($){
  Drupal.behaviors.teupaga = { attach: function(context, settings){

    //BURGER

    if($(window).width() < 950)
    {
      jQuery('.region-header').click(function(){
        $(this).toggleClass('open');
      });
    }
    //MENU
    jQuery('#main-menu ul').removeClass('inline');


  
  }}

})(jQuery);
