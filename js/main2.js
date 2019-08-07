$('document').ready(function(){

    /* text(), html(), css(), replaceWith, replaceAll(), attr(), remove(), removeAttr(), addClass(), removeClass, toggleClass(), prepend(), append(), before(), after(),  */

    $('.btn1').click(function(){
        // $('p').text('This is a new Text');
        // $('p').html('<h3 style="color:red">This an h3 text</h3>');

        // $('p').css('propertyname','value');
        // $('p').css('color','blue');

        // $('p').css({'color':'blue','background-color':'#ccc'});

        $('img').attr('src','../images/profile.jpg');
    });
    $('.btn2').click(function(){
        $('p').addClass('add');
    });
    $('.btn3').click(function(){
        $('div').removeClass('jumbotron');
    });
    $('.btn4').click(function(){
        $('p').append('<p>Append Text</p>');
    });
    $('.btn5').click(function(){
        $('p').prepend('<p style="color:red">Prepend Text</p>');
    });
    $('.btn9').click(function(){
        $('p').remove();
    });


});