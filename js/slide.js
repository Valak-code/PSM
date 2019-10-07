$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        stagePadding: 200,
        loop: true,
        margin: 10,
        dots: false,
        items: 1,
        lazyLoad: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 50
            },
            600: {
                items: 1,
                stagePadding: 50
            },
            1000: {
                items: 1,
                stagePadding: 150
            },
            1200: {
                items: 1,
                stagePadding: 150
            },
            1400: {
                items: 1,
                stagePadding: 150
            },
            1600: {
                items: 1,
                stagePadding: 150
            },
            1800: {
                items: 1,
                stagePadding: 200
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navClass: ['btn btn-outline-dark owl-prev-dev', 'btn btn-outline-dark owl-next-dev']
    })

});