/* fixed header*/

$('.header__nav').css({
    position: 'fixed',
    top: 0,
    
    width: '100%',
    zIndex: 100
    
})
/*
$('.header__content-bg').css({
    paddingTop: $('.header__nav').outerHeight()
})
*/
$('.header__content-bg').css({
    marginTop: $('.header__nav').outerHeight()
})

const windowInnerWidth = document.documentElement.clientWidth;
if (windowInnerWidth > 0)/*(windowInnerWidth > 1200)*/ {
    $('.header__content-bg').css({
        marginTop: $('.header__nav').outerHeight()
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header__nav').css({
                boxShadow: '0 0 15px #8e8e8e',
                
    
            });
            
            
        } else {
            $('.header__nav').css({
                boxShadow: 'none',
                
            });
            
            
        }
    }) 
} /*else if (windowInnerWidth < 1200 && windowInnerWidth > 1024) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header__nav').css({
                boxShadow: '0 0 15px #8e8e8e',
                
    
            });
            
            
        } else {
            
            $('.header__nav').css({
                boxShadow: 'none',
                
            });
            
            
        }
    }) 
}*/




/*burger menu 1*/
/*
$('.nav__btn').click(function () {
    $('.header__menu').css('transform', 'translateX(0)');
    $('.nav__btn').toggleClass('opened');

    $(document).mouseup(function (e) {
        const list = $('.header__menu'),
            link = $('.nav__link');

        if (!list.is(e.target) && !link.is(e.target)) {
            list.css('transform', 'translateX(-110%)');
            $('.nav__btn').css('opacity', '1');
        }
    })
})*/
$('.nav__btn').click(function () {
    $('.nav__btn').toggleClass('opened');
   
    if ($('.nav__btn').hasClass('opened')) {
        $('.header__menu').css('transform', 'translateX(0)');
        $('.nav__btn').css('transform', 'translateY(-50px)');
    } else {
        $('.header__menu').css('transform', 'translateX(-110%)');
        $('.nav__btn').css('transform', 'translateY(0)');
    }

})

// Lang menu

$('.header__nav .lang label svg').click(function () {
    $('.header__nav .lang label svg').toggleClass('rotated');
    $('.header__nav .langs').toggleClass('lang-show');
    $('.header__nav .langs').toggleClass('lang-hide');
}) 

// Brands dropmenu

$('.header__menu .header__menu-brands-link').click(function () {    
    if (windowInnerWidth > 768) {
        $('.header__nav .brands-dropmenu').toggleClass('brands-dropmenu-show');
        $('.header__nav .brands-dropmenu').toggleClass('brands-dropmenu-hide');
    } else if (windowInnerWidth <= 768) {
        $('.header__nav .header__menu-brands-link svg').toggleClass('rotated');
        $('.header__nav .brands-dropmenu').toggleClass('brands-dropmenu-show');
        $('.header__nav .brands-dropmenu').toggleClass('brands-dropmenu-hide');
    }
    
}) 

// Scroll to ID

$('.js-sсroll-to-id').click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href'),
        toElement = $(attr).offset().top;//offset - счтает кол-во пикселей до элемента
        toElementCorrection = toElement - $('.header__nav').outerHeight();
    $('html, body').animate({
        scrollTop: toElementCorrection
    }, {
        duration: 1000  //время перехода
    })
})