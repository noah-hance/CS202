//for loops, while loops and do while.

/* for(initialization;condition;increment){
    run your code/ do something
} */

// for(let i = 0; i <= 5; i++){
//     console.log('The number is : ', i);
// }

// console.log('loop finished');

const names = ['Michael', 'Wang', 'James', 'Sarah', 'Max', 'Kim'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);

    let html = `<li>${names[i]}</li>`;

    document.write(html);
}
