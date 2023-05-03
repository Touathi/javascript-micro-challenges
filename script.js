function addition(num1,num2) {

// created addmath in order to add the two numbers
let addmath = num1 + num2

if (num1 > num2) {
    console.log('The first number was bigger!');
}
if ( num2 > num1 ) {
    console.log('The second number was bigger!');
}
if (num1 === num2) {
    console.log('The numbers are the same!');
}
    return addmath
}

// creating variable addtionResults
let additionResults = addition( 8, 92)

// Testing function
console.log( '8 + 92 =', additionResults);


