/* --------------------------------------------------------------------------
 * Indonez     : Yuna - Personal Blog HTML Template
 *  
 * file        : theme-script.js
 * Version     : 1.0
 * Author      : Indonez Team
 * Author URI  : http://indonez.com
 *
 * Indonez Copyright 2015 All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * javascript plugin configuration
      1. Menu Configuration

 
 * javascript handle initialization
      1. Menu and responsive
      2. Animation
      3. ScrollUp
      4. Retina
	  5. Nav Sidebar
	  6. Open Search
 * 
 * -------------------------------------------------------------------------- */

(function($) {

/* --------------------------------------------------------------------------
 * 1. Menu Configuration
 * -------------------------------------------------------------------------- */
   "use strict";
   
   if ($.fn.smartmenus) {
         $.fn.idzmenu = function (options) {
            return this.each(function() {
               var self = $(this);

               self.smartmenus({
                  mainMenuSubOffsetX: 0,
                  mainMenuSubOffsetY: 0,    
                  subMenusSubOffsetX: 0,
                  subMenusSubOffsetY: 0,
                  subIndicatorsText : ''
               }).find('li.active').children('a').addClass('active');
            });
         };
   }

})(jQuery) + (function($){

/* --------------------------------------------------------------------------
 * jQuery Handle Initialization
 * -------------------------------------------------------------------------- */
   "use strict";

   /* ----------- SETTING ----------- */
   var themeApp = {
      
      // ----------- 1. Menu and responsive ----------- 
      theme_menu:function() {
		  
         $("#menu").idzmenu();

         
      },
      
      // ----------- 2. Animation ----------- 
      theme_animation:function() {
         if (!Modernizr.touch) {
            if ($(".me-animate")[0]) {
               $(".me-animate").css('opacity', '0');
            }

            $(".me-animate").waypoint(function() {
               var animate = $(this).attr('data-animate');
               var delayanimate = $(this).attr('data-animate-delay');

               if( delayanimate > 0 ) {
                  var delayTime = (delayanimate / 1000) + 's';

                  $(this).css({
                     'visibility'              : 'visible',
                     '-webkit-animation-delay' : delayTime,
                     '-moz-animation-delay'    : delayTime,   
                     '-o-animation-delay'      : delayTime,     
                     'animation-delay'         : delayTime
                  });
               }

               $(this).css('opacity', '1');
               $(this).addClass("animated " + animate);
            }, {
               offset: '80%',
               triggerOnce: true
            });

            $(window).scroll(function() {   
               if($(window).scrollTop() + $(window).height() == $(document).height()) {
                  $(".me-animate").each(function() {
                     $(this).removeClass("animated");
                  });
               }
            });
         }
      },

  
     
      // ----------- 3. ScrollUp -----------
      theme_scrollUp:function() {
         $.scrollUp({
            scrollText: '<i class="fa fa-chevron-up"></i>',
            scrollSpeed: 1000,
            zIndex: 99
         });
      },

      
      // ----------- 4. Retina -----------
      theme_retina:function() {
         if ($.fn.retina) {
            $('img.retina').retina("@2x");
         }
      },
	  
	  // ----------- 5. Nav Sidebar -----------
	  theme_navbutton:function(){
		 
		$(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });
		  
	  },
	  
	  // ----------- 6. Open Search -----------
	  theme_opensearch:function(){
		 
		$('#open-search').on("click", function(){
			$('.search-panel').toggleClass('hidden');
		});
		  
	  },
	  

      // theme init
      theme_init:function(){
         themeApp.theme_menu();
         themeApp.theme_animation();
         themeApp.theme_scrollUp();
         themeApp.theme_retina();
		 themeApp.theme_navbutton();
		 themeApp.theme_opensearch();
      }
   }

   jQuery(document).ready(function($){
	   	   
		themeApp.theme_init();
		
		$(".has-scroll").niceScroll();

   });
   
})(jQuery);