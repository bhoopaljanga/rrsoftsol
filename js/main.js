/*-----------------------------------------------------------------------------------

    Theme Name: RR Softsol - IT Solutions & Technology Company
    Description: RR Softsol - IT Solutions & Technology Company
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Horizontal Tab Effect
        07. Verticle Tab Effect
        08. Resize function
        09. Change Background Image
        10. FullScreenHeight function
        11. ScreenFixedHeight function
        12. Copy to clipboard
        13. FullScreenHeight and screenHeight with resize function
        14. Current Year
        15. Tabs
        16. CountUp
        17. Countdown
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });


        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            var logoDark = $(".navbar-brand.dark img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.jpg');
                logodefault.attr('src', 'img/logos/logo.jpg');
                logoDark.attr('src', 'img/logos/logo.jpg');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.jpg');
                logodefault.attr('src', 'img/logos/logo.jpg');
                logoDark.attr('src', 'img/logos/logo.jpg');
            }
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });


        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        // It is for local video
        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.popup-social-video').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        /*------------------------------------
            06. Horizontal Tab Effect
        --------------------------------------*/

        //Click on first li element
        $( ".tab1" ).click(function() {
        $( ".second, .third, .four, .five" ).fadeOut();
        $( ".first" ).fadeIn(1200);
        });

        //Click on second li element
        $( ".tab2" ).click(function() {
        $( ".first, .third, .four, .five" ).fadeOut();
        $( ".second" ).fadeIn(1200);
        });

        //Click on third li element
        $( ".tab3" ).click(function() {
        $( ".second, .first, .four, .five" ).fadeOut();
        $( ".third" ).fadeIn(1200);
        });

        //Click on third li element
        $( ".tab4" ).click(function() {
        $( ".first, .second, .third, .fifth" ).fadeOut();
        $( ".four" ).fadeIn(1200);
        });

        //Click on third li element
        $( ".tab5" ).click(function() {
        $( ".first, .second, .third, fifth" ).fadeOut();
        $( ".fifth" ).fadeIn(1200);
        });

        /*------------------------------------
            07. Verticle Tab Effect
        --------------------------------------*/

        //Click on first li element
        $( ".v-tab1" ).click(function() {
        $( ".v-second, .v-third" ).fadeOut();
        $( ".v-first" ).fadeIn(1000);
        });

        //Click on second li element
        $( ".v-tab2" ).click(function() {
        $( ".v-first, .v-third" ).fadeOut();
        $( ".v-second" ).fadeIn(1000);
        });

        //Click on third li element
        $( ".v-tab3" ).click(function() {
        $( ".v-econd, .v-first" ).fadeOut();
        $( ".v-third" ).fadeIn(1000);
        });

        /*------------------------------------
            08. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            09. Change Background Image
        --------------------------------------*/

        $('.vision-wrapper').on('mouseenter', function (e) {
            var bg = $(this).data('background');
            $('.vision-changebg').animate({ opacity: 0.9 }, 50, function(){
                $('.vision-changebg').css('background-image', 'url(' + bg + ')');
            });
            $('.vision-changebg').delay(50).animate({ opacity: 0.9 }, 50);
        });

        /*------------------------------------
            10. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            11. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            12. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };


        /*------------------------------------
            13. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

        /*------------------------------------
            14. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());

    // === when document ready === //
    $(document).ready(function(){


        /*------------------------------------
            15. Sliders
        --------------------------------------*/

        // vision-changebg
        $('.vision-changebg').owlCarousel({
            loop: true,
            responsiveClass: true,
            center: false,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            margin: 0,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 4,
                    loop: false
                }
            }
        });

        // service-carousel
        $('.service-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200:{
                    items: 4
                }
            }
        });

        // service2-carousel
        $('.service2-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    dots: false
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // service3-carousel
        $('.service3-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // portfolio1-carousel
        $('.portfolio1-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // portfolio2-carousel
        $('.portfolio2-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,            
            nav: false,
            dots: true,
            center:true,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        // portfolio3-carousel
        $('.portfolio3-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,            
            nav: false,
            dots: false,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        // testimonial-carousel
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,     
            center: true,
            nav: false,
            dots: false,
            margin: 0,
            items: 1
        });

        // testimonial2-carousel
        $('.testimonial2-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                }
            }
        });

        // testimonial3-carousel
        $('.testimonial3-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 800,            
            nav: false,
            dots: true,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                575: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

        // testimonial4-carousel
        $('.testimonial4-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                575: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // testmonial5-carousel
        $('.testimonial5-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    margin: 15,
                    dots: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },

            }
        });

        // client1-carousel
        $('.client1-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 50,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });

        // client2-carousel
        $('.client2-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200:{
                    items: 5
                }
            }
        });

        // client3-carousel
        $('.client3-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200:{
                    items: 5
                }
            }
        });

        // pricing-carousel
        $('.pricing-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            center:false,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // blog-carousel
        $('.blog-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });

        // blog-client carousel
        $('.blog-client').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,
            nav: false,
            dots: false,
            items: 1,
            margin: 15
        });

        // blog-post carousel
        $('.blog-post-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,
            nav: false,
            dots: false,
            items: 1,
            margin: 15
        });

        // portfolio-detail carousel
        $('.portfolio-detail').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 800,            
            nav: false,
            dots: true,
            center: false,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                767: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // Sliderfade
        $('.banner1 .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            autoplay: true,
            smartSpeed:500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    nav: false
                },
                768: {
                }
            }            
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });

        // Slider text animation
        var owl = $('.slider-fade');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            
            $('h3').removeClass('animated fadeInDown');
            $('h1').removeClass('animated fadeInLeft');
            $('p').removeClass('animated fadeInLeft');
            $('.butn').removeClass('animated fadeInUp');
            $('.video_btn').removeClass('animated fadeInUp');
            $('.video-text').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInDown');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInLeft');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInLeft');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.video_btn').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.video-text').addClass('animated fadeInUp');
        });

        /*------------------------------------
            15. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        //Vertical Tab
        if ($(".verticaltab").length !== 0) {
            $('.verticaltab').easyResponsiveTabs({
                type: 'vertical', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo2');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            16. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            17. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
                date: "01 Oct 2024 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                format: "on"
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            18. Isotop
        --------------------------------------*/

        var $PortfolioGallery = $('.portfolio-gallery-isotope').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $PortfolioGallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        })

        // stellar
        $window.stellar();

    });

})(jQuery);