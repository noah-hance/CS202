const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.popup-close');


button.addEventListener('click', () =>{
    // console.log('you click me');
    popup.style.display = 'block';
});

close.addEventListener('click', () =>{
    popup.style.display = 'none';
});


popup.addEventListener('click', e =>{
    // console.log(e);
    // console.log(e.target);
    if(e.target.className === 'popup-wrapper'){
        // console.log('this is popup-wrapper');
        popup.style.display = 'none';
    }
});
