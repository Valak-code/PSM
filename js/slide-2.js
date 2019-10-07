$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        dots: false,
        lazyLoad: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navClass: ['btn btn-success owl-prev-dev', 'btn btn-success owl-next-dev'],
        loop: true,
    })

});