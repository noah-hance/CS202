// regular functions

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }


// arrow functions

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const calcArea = radius => 3.14 * radius**2;



// //regular function
// const width = function(){
//     length * hieght;

// }

// // arrow function
// const width = () => length * hieght;


// // regular function
// const double = function(i){
//     i * 2;
// }

// // arrow function
// const double = i => i * 2;


// // regular function
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// arrow function

const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,20,30], 0.2));










// practise arrow functions













