$(document).ready(function () {


    // ========================================================================
    // TOP NAV SELECTION
    $('.select2-topnav-single').select2({
        language: "vi",
        dropdownCssClass: "select2-topnav-dropdown",
        closeOnSelect: true
    }).on('select2:opening', function (e) {
        $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Tìm kiếm')
    });

    // select2 prevent closing after click (mobile)
    if ($(window).width() < 992) {
        $(".select2-topnav-single").on("select2:open", function () {
            $(".select2-results").css("display", "none");
        });

        $(".select2-topnav-single").on('select2:opening', function () {
            setTimeout(function () {
                $(".select2-results").css("display", "block");
            }, 200);
        });
    }

    // Toggle click for search 
    $('.searchbar-toggler').click(function (e) {
        e.preventDefault();
        $("#NavbarCollapse__Search").addClass('active');
        $("body").addClass('to-front');
    });
    $('.page-header-ftr__mhdr-close').click(function (e) {
        e.preventDefault();
        $("#NavbarCollapse__Search").removeClass('active');
        $("body").removeClass('to-front');
    });
    //end


    // ========================================================================
    // LANDING PAGE

    //always open accordion on showcase block
    $('#Accordion-Showcase [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var dataShowcase = $(this).data('showcase');
        if (!$(this).hasClass('collapsed')) {
            e.stopPropagation();
            return false;
        } else {
            // console.log(dataShowcase);
            $('.accordion-media .showcase-wrap').each(function (e) {
                $(this).removeClass('active');
                if ($(this).attr('id') == dataShowcase) {
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
    $(document).scroll(function () {
        scrollNavbarBackground();
    });

    //[detail] slick slider
    $('.block-cards__grid--slide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });

    //[fancy]
    $('[data-fancybox]').fancybox({
        buttons: [
            "fullScreen",
            "download",
            "thumbs",
            'downloadOrg',
            "close"
        ],
        idleTime: false,
        beforeShow: function (instance, current) {
            $('.fancybox-button--download').attr('download', current.src);
        }
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