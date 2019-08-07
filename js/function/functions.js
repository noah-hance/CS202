// function declaration

/* function functionName(parameter){
    do something
} */
// console.log('Hello, World!');

// function greet(){
//     console.log('Hello, There!');
// }

// call function

// greet();

//function expression

// const speak = function greet(){
//     console.log('good morning');
// }

// speak();
// speak();
// speak();


// arguments & parameters

// const speak = function greet(name = 'John',time = 'afternoon'){
//     // console.log(`good morning ${name}`);
//     console.log(`good ${time} ${name}`);
// }

// speak('Justice');
// speak('Justice', 'morning');
// speak();


// return statements

// const speak = function(name, time){
//     console.log(`good morning ${name}`);
// }


// // speak('Justice');

// console.log(speak());

const calcArea = function(radius){
    // let area = 3.14 * radius**2;
    // console.log(area);
    // return area;

    return 3.14 * radius**2;

}

const area = calcArea(5);

console.log(area);
