$('document').ready( () =>{
    // run you code here

    // alert('Hell, Everyone');

    // $('p').hide();

    /* selectors - element(p, ul, li, h1, a), id, class, multiple, css3 */

    // id selector
    // $('#para1').hide();

    //class selector
    // $('.para').hide();

    // multiple
    // $('.para, p, #para1, ul').hide();

    // $('*').hide();

    // css3 selectors
    // $('ul li:first-child').hide();

    // methods - .hide(), .show(), toggle(), fadeIn(), fadeOut(), fadeToggle(), slideDown(), slideUp(), slideToggle(), animate()

    // Event - click, dbclick, mouseover, hover(mouserenter, mouseleave), keydown, load, 

    //parameters - 1000 = 1s, 2000 = 2s, fast, slow

    $('.btn1').click(function(){
        // alert('Hi');
        $('.para').hide(2000);
    });

    $('.btn2').on('click', ()=>{
        $('.para').show(3000);
    });

    $('.btn3').on('click', ()=>{
        $('.para').toggle(1000);
    });

    $('.btn4').on('click', ()=>{
        $('ul').fadeToggle('slow');
    });

    /* Animations - jquery */

    $('.box1').hover(function(){

        // $('.box1').animate({'top': '300px'}, 2000);


        $(this).animate({'top': '300px'}, 2000);
        $(this).animate({'top': '0'}, 2000);

    });

    /* other methods - setInterval, clearInterval,  setTimout, clearTime scrollTo, scrollTop */


    setTimeout(function(){
        // $('#para1').fadeOut(1000);

        // alert('Hi');
    }, 3000);

    $('.btn5').click( ()=>{
        setInterval(function(){
            alert('SignUp');
        }, 3000);
    });

});