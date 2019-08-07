/* Adding and Changing Page Content ===================================  */

// const para = document.querySelector('p');

// console.log(para.innerText)

// para.innerText = 'Justice Banson';

//Select all p
// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     para.innerText += 'New Text';
// })
// const ul = document.querySelector('.content');

// const names = ['Michael', 'Max', 'Kim', 'Paul'];

// names.forEach(name => {
//     ul.innerHTML += `<h3>${name}</h3>`;
// })


/* Changing style==================================== */


const title = document.querySelector('h1');

// console.log(title.style);
// console.log(title.style.color);

title.style.color = 'red';

title.style.margin = '45px';

title.style.fontSize = '60px';

title.style.fontSize = '';


/* Add and Remove Classes ===================================  */
const content = document.querySelector('.content');

const error = document.querySelector('.error');

content.classList.add('success');

error.classList.remove('error');


