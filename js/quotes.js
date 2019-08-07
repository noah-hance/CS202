let quotes = [
    {
        "quote": "Don't cry because it's over, smile because it happened.",
        "author": "Dr. Seuss"
    },
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "So many books, so little time.",
        "author": "Frank Zappa"
    },
    {
        "quote": "A room without books is like a body without a soul.",
        "author": "Marcus Tullius Cicero"
    },
    {
        "quote": "You only live once, but if you do it right, once is enough.",
        "author": "Mae West"
    },

]

$('document').ready(()=>{
    $('.btn').click(()=>{
        let number = Math.floor(Math.random()*quotes.length);

        $('#quote').html('<span></span>' + quotes[number].quote + '<span></span>');
        $('#author').html('<span></span>' +quotes[number].author + '<span></span>');
    });
});