$(document).ready(function () {

    // ========================================================================
    // LANDING PAGE

    //always open accordion on showcase block
    $('#Accordion-Showcase [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var dataShowcase = $(this).data('showcase');
        if (!$(this).hasClass('collapsed')) {
            e.stopPropagation();
            return false;
        }else{
            // console.log(dataShowcase);
            $('.accordion-media .showcase-wrap').each(function(e) {
                $(this).removeClass('active');
                if ($(this).attr('id') == dataShowcase){
                    $(this).addClass('active'); 
                }
            });
        }
        dataShowcase = '';
    });

    //[landing] animate when scroll to element
    scrollWaypointInit($('.element-animated'));


    //[landing] smoooth scroll
    $('.js-smooth-scroll').smoothScroll({
        offset: -56,
        speed: 1000
    });

    //[landing] navbar fixed
    scrollNavbarBackground();
    $(document).scroll(function(){
        scrollNavbarBackground();
    });
})

function scrollNavbarBackground(){
    if($(document).scrollTop() > 56){
        $('.js-header-landing-bg.fixtop').addClass('fixtop--active');
    }else{
        $('.js-header-landing-bg.fixtop').removeClass('fixtop--active');
    }
}

function scrollWaypointInit(items, trigger) {
    items.each(function () {
        var element = $(this),
            osAnimationClass = element.data('animation'),
            osAnimationDelay = element.attr('animation-delay');

        element.css({
            '-webkit-animation-delay': osAnimationDelay,
            '-moz-animation-delay': osAnimationDelay,
            'animation-delay': osAnimationDelay
        });

        var trigger = (trigger) ? trigger : element;

        trigger.waypoint(function () {
            element.addClass('animated').addClass(osAnimationClass);
        }, {
            triggerOnce: true,
            offset: '92%'
        });
    });
}