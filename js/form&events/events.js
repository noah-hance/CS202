/* Events Basics ===================================  */
/* Events - actions that the user/browser reacts to 
e.g. mouseover, mouseout, hover, click, dblclick, load, resize,
*/

// function clickMe(){
//     console.log('you clicked');
// }


// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

// items.forEach(item =>{

//     item.addEventListener('click', e =>{

//         // console.log('item clicked');
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(item);
//         // e.target.style.color = 'red';
//         e.target.style.textDecoration = 'line-through';
//     });
// })








/* Creating and Removing Elements ===================================  */

// const ul = document.querySelector('ul');

// items.forEach(item =>{
//     item.addEventListener('click', e =>{

//         e.target.remove();

//     })
// })



/* Event Bubbling (and Delegation) ====================================== */

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'something new create';
    ul.appendChild(li);
})









// /* More DOM Events ====================================================== 














