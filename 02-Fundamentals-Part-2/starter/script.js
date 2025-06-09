'use strict';
/*
function logger()
{
    console.log("Hello, World!");
}

logger();
logger();
logger();

function fruitJUICE(Apples, oranges)
{
    return `Juice made with ${Apples} apples and ${oranges} oranges.`;
}
console.log(fruitJUICE(5, 3));


//function declaration
function add(a, b) {
    return a + b;
}
console.log(add(Number(prompt("Enter first number: ")), Number(prompt("Enter second number: "))));

//function expression
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(Number(prompt("Enter first number: ")), Number(prompt("Enter second number: "))));

//function declaration can be called before it is defined
//function expression cannot be called before it is defined

//Arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(28,6));

const yearsLeftRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirementAge = 65;
    const yearsLeft = retirementAge - age;
    return `${firstName} has ${yearsLeft} years left until retirement.`;
}

console.log(yearsLeftRetirement(1990, "John"));



function cutFruit(fruit){
    return fruit * 4;
}

function fruitJUICE(Apples, oranges)
{   const applePieces=cutFruit(Apples);
    const orangePieces=cutFruit(oranges);

    return `Juice made with ${applePieces} apples and ${orangePieces} oranges.`;
}
console.log(fruitJUICE(5, 3));


//Arrays
const friends = ['Michael', 'Steven', 'Peter'];
//or const friend=new Array('Michael', 'Steven', 'Peter');
console.log(friends);
//arrays are zero indexed
console.log(`${friends[0]} and ${friends[2]} are best-friends.`);
console.log(friends.length); //length of the array
friends[2] = 'Jay'; //change value of an element
console.log(friends); //['Michael', 'Steven', 'Jay']
const firstName = 'John';
const john = [firstName, 'Smith', 1990, 'teacher', friends];
console.log(john);

//Exercise
const calcAge = function(birthYear) {
    return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//console.log(calcAge(years)); // NaN because calcAge expects a single number, not an array
let ageArray=[];
for(let i = 0; i < years.length; i++) {
    ageArray.push(calcAge(years[i]));
}
console.log(ageArray);


const friends = ['Michael', 'Steven', 'Peter'];
//or const friend=new Array('Michael', 'Steven', 'Peter');
console.log(friends);
const resultPush=friends.push('Jay'); //add element to the end of the array
console.log(resultPush); // 4 (new length of the array)
friends.unshift('John'); //add element to the beginning of the array
console.log(friends); //['John', 'Michael', 'Steven', 'Peter', 'Jay']

friends.pop(); //remove last element
const resultPop=friends.pop(); //returns the removed element
console.log(resultPop); // 'Peter'
console.log(friends); //['John', 'Michael', 'Steven']
friends.shift(); //remove first element
console.log(friends); //['Michael', 'Steven',]

console.log(friends.indexOf('Steven')); // 1 (index of the element)
console.log(friends.indexOf('Bob')); // -1 (element not found)
console.log(friends.includes('Steven')); // true (element found)
console.log(friends.includes('Bob')); // false (element not found)

//checks strict equality
friends.push(23)
console.log(friends.includes('23')); // false (string '23' not found)

if(friends.includes('Peter'))
{
    console.log("Peter is a friend.");
}


const jonasArray=['Jonas', 
    'Schmedtmann', 
    1991, 
    'teacher', 
    ['Michael', 'Peter', 'Steven']
];

//Objects
const jonas={
    firstName:'Jonas',
    lastName:'Schmedtmann',
    birthYear:1991,
    job:'teacher',
    friends:['Michael', 'Peter', 'Steven'],
};
console.log(jonas); 
console.log(jonas.lastName); // 'Schmedtmann'
console.log(jonas['lastName']); // 'Schmedtmann'
//Bracket notation is useful for any expression
 
const nameKey='Name';
console.log(jonas['first' + nameKey]); // 'Jonas'
jonas.location='Portugal';
jonas['twitter']='@jonasschmedtmann';
console.log(jonas);
const interestedIn=prompt("What do you want to know about Jonas? Choose between firstName, lastName, birthYear, job, and friends.");
if(jonas[interestedIn]) {
console.log(jonas[interestedIn]); 
}
else {
    console.log("Wrong request! Choose between firstName, lastName, birthYear, job, and friends.");
}
//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]} `)


//Objects and Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 2006,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    //Method
    calcAge: function() {
     this.age = 2025 - this.birthYear; //this refers to the current object 
     //this.age is a property of the object which is same like jonas.age
        return this.age;
    },
    
    getSummary: function() {
        this.calcAge();
        this.summary=`${this.firstName} is a ${this.age}-year-old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver license.`;
        return this.summary;
    }
};

console.log(jonas.getSummary());
console.log(jonas.summary); // Accessing the summary property after calling getSummary method



//Iteration
for(let i=0;i<10;i++)
    {
        console.log(`Lifting weights repetion ${i+1} 🏋️‍♂️`)  ;
    }




const JohnArray = ['John', 'Doe', 1990, 'teacher', ['Michael', 'Peter', 'Steven']];
for(let i=0;i<JohnArray.length;i++)
{
    console.log(JohnArray[i], typeof JohnArray[i]);
}

const num=[1,2,3,4,5];
const adjacentSum =[];
for(let i=0;i<num.length-1;i++)
{
    adjacentSum.push(num[i]+num[i+1]);
    //adjacentSum[i]=num[i]+num[i+1]; //alternative way to push the sum into the array
}
console.log(adjacentSum); // [3, 5, 7, 9]

//continue and break statements
for(let i=0;i<num.length;i++)
{
    if(num[i]===3) continue; //skip the iteration when num[i] is 3
    console.log(num[i]); // 1, 2, 4, 5
}

for(let i=0;i<num.length;i++)
{
    if(num[i]===3) break; //stop the iteration when num[i] is 3
    console.log(num[i]); // 1, 2
}
    

//backward loop
const numbers = [1, 2, 3, 4, 5];
for(let i=numbers.length-1;i>=0;i--){
    console.log(`${numbers[i]} => ${numbers[i]**2}`); 
}
    */

//loop inside loop
for(let i=1;i<=3;i++){
    console.log(`Outer loop iteration ${i}`);
    for(let j=1;j<=2;j++){
        console.log(`  Inner loop iteration ${i}.${j}`);
    }
}

//while loop
let i = 1;
while (i <= 3) {
    console.log(`Iteration ${i}`);
    i++;
}

let dice= Math.trunc(Math.random() * 6) + 1; // Random number between 1 and 6
while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; // Re-roll the dice
}
console.log(`You rolled a ${dice}, now you can stop!`);
