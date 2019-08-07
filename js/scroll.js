$('document').ready(()=>{
    /* SmoothScroll */
    $('.scroll').click(function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });


    /* ScrollReveal */

    // ScrollReveal().reveal('.showcase-text');

    // const sr = ScrollReveal();

    // sr.reveal('.showcase-text', {
    //     origin: 'bottom',
    //     distance: '100px',
    //     scale: '0.5',
    //     duration: 2000,
    //     reset: true
    // });

    // sr.reveal('.main_1', {
    //     origin: 'bottom',
    //     distance: '100px',
    //     scale: '0.4',
    //     duration: 2000,
    //     delay: 1000,
    //     reset: true
    // });

    // sr.reveal('.contact-text', {
    //     origin: 'bottom',
    //     distance: '100px',
    //     scale: '0.4',
    //     duration: 2000,
    //     delay: 2000,
    //     reset: true
    // });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        scale: '0.2',
        duration: 1000,
        reset: true
    });

    sr.reveal('.showcase-text', {
        delay: 1000
    });
    sr.reveal('.main_1', {
        delay: 2000
    })
    sr.reveal('.contact-text', {
        delay: 3000
    })


});