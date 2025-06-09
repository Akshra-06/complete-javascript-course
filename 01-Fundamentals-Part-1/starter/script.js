/*
 let js="amazing";
 if(js=='amazing') alert("Here I come JS!");

 console.log(40 + 8 + 23 - 10);
   
 //Sinle line comment

 /* 
    Multi-line comment
    This is a multi-line comment    
 */

// Data types
// Data types are the classification of data items. In JavaScript, data types can be divided into two categories:

/* There are 7 primitive data types in JavaScript:
1. String: Represents a sequence of characters, enclosed in single or double quotes.
2. Number: Represents numeric values, both integers and floating-point numbers.
3. Boolean: Represents a logical entity and can have two values: true or false.
4. Undefined: Represents a variable that has been declared but not assigned a value.
5. Null: Represents the intentional absence of any object value.
6. Symbol: Represents a unique and immutable value, often used as object property keys.
7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.


// String
let firstName="John";
console.log(typeof firstName); // Output: string

// Number
let salary=30000;
console.log(typeof salary); // Output: number

// Boolean
let isStudent=true;
console.log(typeof isStudent); // Output: boolean

// Undefined
let lastName;
console.log(typeof lastName); // Output: undefined

// Null
let emptyValue=null;
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

// Symbol
let uniqueId=Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol

// BigInt
let largeNumber=1234567890123456789012345678901234567890n;
console.log(typeof largeNumber); // Output: bigint

// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1


//Variables, Constant
// Variables are containers for storing data values. In JavaScript, we can declare variables using var, let, or const.
// 1. var: Function-scoped or globally-scoped variable declaration.
// 2. let: Block-scoped variable declaration.
// 3. const: Block-scoped variable declaration for constants (cannot be reassigned).

// Example of variable declaration and assignment
let name = "John"; // Using let
const age = 30; // Using const (constant value)
var city = "New York"; // Using var (function-scoped)


// Example of variable reassignment
name = "Jane"; // Reassigning the value of name
console.log(name); // Output: Jane
// city = "Los Angeles"; // This is allowed
// age = 31; // This will throw an error because age is a constant

//operators
console.log(name + "'s father is " +age * 3 + " years old" ); 
console.log(2**3, salary/4, salary%4); // Exponentiation operator (**), Division (/), Modulus (%)
// Assignment operators 
let x = 10;
let y = 5;
x += y; // x = x + y
console.log(x); // Output: 15
x -= y; // x = x - y
console.log(x); // Output: 10
x *= y; // x = x * y
console.log(x); // Output: 50
x /= y; // x = x / y
console.log(x); // Output: 10
x %= y; // x = x % y
console.log(x); // Output: 0
x **= y; // x = x ** y
console.log(x); // Output: 0

// Comparison operators
console.log(5 == "5"); // Loose equality (true)
console.log(5 === "5"); // Strict equality (false)
console.log(5 != "5"); // Loose inequality (false)
console.log(5 !== "5"); // Strict inequality (true)
console.log(5 > 3); // Greater than (true)
console.log(5 < 3); // Less than (false)
console.log(5 >= 5); // Greater than or equal to (true)
console.log(5 <= 3); // Less than or equal to (false)

// Logical operators
console.log(true && false); // Logical AND (false)
console.log(true || false); // Logical OR (true)
console.log(!true); // Logical NOT (false)

// Conditional (Ternary) operator
let myage = 18;
let isAdult = (myage >= 18) ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult

//precedence
// Operator precedence determines the order in which operations are performed in an expression.
console.log((2 + 3 * 4)>(2-3*4+12)); 

//string concatenation
let greeting = "Hello";
let message = greeting + ", " + name + "! I will pay you Rs."+salary+ " for your work" ; // String concatenation
console.log(message); // Output: Hello, Jane! I will pay you Rs.30000 for your work
// Template literals (ES6)
let templateMessage = `${greeting}, ${name}! I will pay you Rs.${salary} for your work`; // Template literal
console.log(templateMessage); // Output: Hello, Jane! I will pay you Rs.30000 for your work

//multiline string
let multilineString = `This is a multiline string.`;
multilineString += ` It can span multiple lines.`;
console.log(multilineString); // Output: This is a multiline string. It can span multiple lines.

console.log("this is a \n\ multiline\n\ string"); // Output: this is a \n\ multiline\n\ string
console.log(`this is a
    multiline
    string`); // Output: this is a multiline string


// Type conversion

const str = "123";
console.log(str+ 1); // Output: "1231" (string concatenation)
console.log(Number(str) + 1); // Output: 124 (numeric addition)
let numString = "42";
let num = Number(numString); // Convert string to number
console.log(num); // Output: 42
let strNum = String(num); // Convert number to string
console.log(strNum); // Output: "42"

// Implicit type conversion
let implicitConversion = "5" + 2; // String concatenation
console.log(implicitConversion); // Output: "52"

// Explicit type conversion
let explicitConversion = Number("5") + 2; // Numeric addition
console.log(explicitConversion); // Output: 7


console.log(Number(name)); // Output: NaN (Not a Number, since name is a string)
// NaN (Not a Number) is a special value in JavaScript that represents an invalid number.
console.log(typeof NaN); // Output: number (NaN is of type number)


//type coercion
console.log("John is " + 22 + " years old"); // String concatenation with number...number to string
console.log("5" - 2); // Numeric subtraction, string "5" is coerced to number 5 Output: 3
console.log('5'+ 2); // String concatenation, number 2 is coerced to string "2" Output: "52"
console.log('5' * 2/'3'); // Numeric multiplication and division, string "5" is coerced to number 5 Output: 3.3333333333333335  

let n='1'+1;
n=n-1;
console.log(n); // Output: 10 (string '1' is coerced to number 1, then subtraction is performed)

//
// let ageAngel =16;
// do{
// if(ageAngel>=18){
//     console.log("You can drive");
// }
// else{
//     yearsLeft=18-ageAngel;
//     console.log("You can drive after " + yearsLeft + " years");   
//     ageAngel++;
// }}while(ageAngel<18);
// 


//Falsy Values = 0, "", null, undefined, NaN, false
console.log(Boolean(0)); // Output: false
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean({}));  // Output: true (empty object is truthy)
console.log(Boolean('hi')); // Output: true (non-empty string is truthy)
console.log(Boolean(123));  // Output: true (non-zero number is truthy)



 const age = Number(prompt("Enter your age:")); // Prompt user for age input
if(age===18){
    console.log("You just became an adult");
}
else if(age>18){
    console.log("You are an adult");
}
else{
    let yearsleft=18-age;
    console.log(`You are not an adult yet
You will become an adult after ${yearsleft} years`);
}



//Use of Logical Operators
const hasDrivingLicense = true;
const hasGoodVision = true;
if(hasDrivingLicense && hasGoodVision){ //and operator
    console.log("You are allowed to drive");
}
else if(hasDrivingLicense || !hasGoodVision)//or operator
{
    console.log("You can drive with some conditions");
} else {
    console.log("You are not allowed to drive");
}


// Switch statement
const day = prompt("Enter a day of the week (1-7):"); // Prompt user for day input
switch(day) {
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    case '7':
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
*/


//statements and expressions
// An expression is a piece of code that produces a value.
// A statement is a complete instruction that performs an action.
let x = 5; // This is a statement (variable declaration)
let y = 10; // This is another statement (variable declaration)
let sum = x + y; // This is an expression (addition) that produces a value
console.log(`The sum of ${x} and ${y} is ${sum}`); // This is a statement (template literal) that outputs a formatted string
//${x} and ${y} are expressions that produce values to be included in the string

const age= Number(prompt("Enter your age:")); // This is a statement (prompt) that gets user input and converts it to a number
console.log(`You can drink: ${age>=18 ? "Wine and Beer" : "Juice and Milk"}`); // This is a statement (template literal) that uses a conditional expression to determine the output

