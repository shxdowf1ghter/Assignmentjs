// Name : Vishal N Patel
// Student Id : 0827195
$(document).ready(function() {
    // Accordion 
    function initAccordion() {
        $('.accordion h3').click(function() {
            $(this).next('.panel').slideToggle('fast');
            if (!$(this).next('.panel').is(':visible')) {
                
                $(this).next('.panel').slideDown('fast');
            }
        });
    }

    // Tabbed functionality
    function initTabs() {
        $('.tabs li a').click(function() {
            var tabId = $(this).attr('href');
            $('.tab-content').hide();
            $(tabId).slideDown('fast');

            
            $('.tabs li').removeClass('active');
           
            $(this).parent().addClass('active');
        });
    }
    
    initAccordion();
    initTabs();
});
