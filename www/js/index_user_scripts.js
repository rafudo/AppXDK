/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_footer_menu */
    
    
        /* button  #btn_slider_fechar */
    $(document).on("click", "#btn_slider_fechar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_lateral"));  
    });
    
        /* button  #btn_footer_dicas */
    
    
        /* listitem  O que é WordPress? */
    
    
        /* listitem  Como Criar o seu SIte */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#insta"); 
    });
    
        /* listitem  Templates WordPass */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#temas"); 
    });
    
        /* button  #btn_footer_home */
    $(document).on("click", "#btn_footer_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_85_38"); 
    });
    
        /* button  #btn_footer_dicas */
    $(document).on("click", "#btn_footer_dicas", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#dicas"); 
    });
    
        /* button  #btn_footer_menu */
    
    
        /* button  #btn_footer_menu */
    
    
        /* button  #btn_footer_menu */
    $(document).on("click", "#btn_footer_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar_lateral"));  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
