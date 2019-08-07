/* QuerySelector */

// const para = document.querySelector('p');
// const para = document.querySelector('h1');

// const para = document.querySelector('#page-title');
// const para = document.querySelector('.error');

const para = document.querySelectorAll('p');

// console.log(para);

console.log(para[1])


/* Ways to Query the DOM ============================================= */

// get an element ID

const title = document.getElementById('page-title');
console.log(title);


// get an element by Class

const errors = document.getElementsByClassName('error');
console.log(errors);

// get an element by Tag name

const paras = document.getElementsByTagName('p');
console.log(paras);




