$(function(){
    $('.section__faq-question').click(function(){
        $(this).closest('.section__faq-item').toggleClass('active');
    });
    $('.header__nav a, .mobile__menu a').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('.mobile__menu').removeClass('active');
        return false;
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000) {
            if(!$('.btn-up').hasClass('active')) {
                $('.btn-up').fadeIn().addClass('active');
            }
        }
        else {
            if($('.btn-up').hasClass('active')) {
                $('.btn-up').fadeOut().removeClass('active');
            }
        }
    });
    $('.btn-up').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    $('#menuToggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile__menu').toggleClass('active');
    });

    $('#contact_form').submit(function(e){
        e.preventDefault();

        var $form = $(this);
        $form.find('button').attr('disabled', 'disabled');

        $.post($(this).attr('action'), $(this).serialize(), function(){

            $form.trigger('reset').find('button').removeAttr('disabled');

            alert('Your message has been sent!');


        });

    });
});