$(document).ready(function () {

    // ========================================================================
    // LANDING PAGE

    //always open accordion on showcase block
    $('#Accordion-Showcase [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('collapsed')) {
            e.stopPropagation();
            return false;
        }
    });

    //[landing] animate when scroll to element
    scrollWaypointInit($('.element-animated'));
})


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
            console.log(osAnimationClass);
            element.addClass('animated').addClass(osAnimationClass);
        }, {
            triggerOnce: true,
            offset: '92%'
        });
    });
}