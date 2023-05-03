// 100-Addition function
function addition(num1,num2) {

// created addmath in order to add the two numbers
let addmath = num1 + num2

    return addmath
}

// creating variable addtionResults
let additionResults = addition( 8, 92)

// Testing function
console.log( '8 + 92 =', additionResults);
// End of 100-Addition function


// 110-Conditional function
function condition(num1,num2) {

    // created addmath in order to add the two numbers
    let math = num1 + num2
    
    if (num1 > num2) {
        console.log('The first number was bigger!');
    }
    if ( num2 > num1 ) {
        console.log('The second number was bigger!');
    }
    if (num1 === num2) {
        console.log('The numbers are the same!');
    }
        return math
    }
// Testing function

console.log( 'First number = 8 Second number = 92');
let conditionResults = condition( 8, 92)
// End of 110-Conditional function


// 120-Arrays Function
function arrays( [ num1, num2, num3, num4, num5 ] ) {

// Variablemath does the adding
 let math = num1 + num5

// return math
    return math
}
 
let arraysResults = arrays( [ 8, 92, 15, 74, 99 ])

// testing my function
console.log( 'my total should be 107 =', arraysResults);
// End of 120-Arrays function


