// callbacks

// const myFunc = (callbackFunction) => {
//     //run statement or do something

//     let value = 50;

//     callbackFunction(value);
// }

// const calcArea = (radius) =>{
//     let x = 25;

//     radius(x);
    
// }

// myFunc(function(value){
//     //do something
//     console.log(value);
// });


/* foreach */

// let people = ['Michael', 'Sarah', 'Wang', 'Emma', 'Zach', 'Jonathan', 'Jackson'];

// people.forEach(function(){
//     console.log('do something');
// })

// people.forEach(function(person){
//     console.log(person);
// })

// people.forEach( person => {
//     console.log(person);
// });

// people.forEach( (person, index) => {
//     console.log(index, person);
// });

// people.forEach( (person, index) => {
//     console.log(`${index} - with a name ${person}`);
// });

// const logPerson = ( (person, index) => {
//     console.log(`${index} - with a name ${person}`);
// });

// people.forEach(logPerson);


// callback & foreach in action
let people = ['Michael', 'Sarah', 'Wang', 'Emma', 'Zach', 'Jonathan', 'Jackson', 'ian'];

const ul = document.querySelector('.people');

let html = ``;

people.forEach(person =>{
    html += `<li style='color:red;'>${person}</li>`;
})

// console.log(html);
ul.innerHTML = html;











// callbacks & forEach




















