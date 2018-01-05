$(document).ready(function(){
    $('input , textarea').focus(function(){ $(this).closest('.feild').addClass('focused out')}) ;
    $('input , textarea').blur(function(){ 
        $(this).closest('.feild').removeClass('focused');
        if($(this).val().length === 0)
        {
            $(this).closest('.feild').removeClass('out');
        }
        
    });

    $('.menu ul li a').click(function(){
        $('.menu ul li').not($(this).parent()).removeClass('active');
        $(this).parent().addClass('active');
        

    });


    $(".nav-link").on('cssClassChanged' , function(e) {
        $(".menu ul li").each( function() {
            if( $(this).hasClass("active") == true ) {
                $(this).removeClass("active");
            }
        });

        $(this).removeClass("active").parent().addClass("active");
    });
    
    $('body').scrollspy({target: "#nav", offset:1});   
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    placement: "right"
}); 
(function(){
        // Your base, I'm in it!
        var originalAddClassMethod = jQuery.fn.addClass;
    
        jQuery.fn.addClass = function(){
            // Execute the original method.
            var result = originalAddClassMethod.apply( this, arguments );
    
            // trigger a custom event
            jQuery(this).trigger('cssClassChanged');
    
            // return the original result
            return result;
        }
})();

//Istope Filtering for Projects Layouyt





  

    

    



});


