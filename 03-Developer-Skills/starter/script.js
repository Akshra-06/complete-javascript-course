// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
//PROBLEM
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
//const temps = [3, -2, -6, -1, 'error', 9, 13, 18, 14, 9, 5];
//1. Understanding the problem
// - What is the temperature amplitude? Answer: The difference between the highest and lowest temperature.
// - How to compute the maximum and minimum temperatures? Answer: By iterating through the array and comparing values.
// - What to do with errors? Answer: Ignore them.

//2. Breaking up into sub-problems
// - How to ignore errors in the array?
// - How to find the maximum temperature?
// - How to find the minimum temperature?
// - Subtract min from max

// const calcTempAmplitude = function (temps) {
//     let min=temps[0];
//     let max=temps[0];
//     for(let i=0;i<temps.length;i++)          
//     {
//         if(temps[i]>max && typeof temps[i] === 'number') {
//             max = temps[i];
//         }
   
//         if(temps[i]<min && typeof temps[i] === 'number') {
//             min = temps[i];
//         }
//     }
//     return max-min;
// }

// //3. Testing the solution
// console.log(`Temperature altitude for the day is ${calcTempAmplitude(temps)}`  ); // Should log the temperature amplitude, ignoring 'error'




//Problem 2
// Function to calculate the temperature amplitude with 2 arrays

//1. Understanding the problem
// - With 2 arrays, how to find the max and min temperatures? Answer: We can merge the two arrays and then find the max and min.
// - Should we implement the same logic as before twice?

//2. Breaking up into sub-problems
// - How to merge two arrays?
const temp1 = [3, -2, -6, -1];
const temp2 = [9, 13, 18, 14, 28, 5];

const calcTempAmplitudeNew = function (temp1, temp2) {
    const temps=temp1.concat(temp2);
   
    let min=temps[0];
    let max=temps[0];
    for(let i=0;i<temps.length;i++)          
    {
        if(temps[i]>max && typeof temps[i] === 'number') {
            max = temps[i];
        }
   
        if(temps[i]<min && typeof temps[i] === 'number') {
            min = temps[i];
        }
    }
    return max-min;
}

//3. Testing the solution
console.log(`Temperature altitude for the day is ${calcTempAmplitudeNew(temp1,temp2)}`  );


//Debugging
//1. Understanding the problem

//Problem: To calculate the temperature in Kelvin

const calculateKelvin= function()
{
    const celsiusTemp={
        value: Number(prompt("Enter the temperature in Celsius:")),
        unit: 'celsius'
    }
   
    console.table(celsiusTemp); // Log the object to the console
   // const kelvinTemp = celsiusTemp.value + 273.15; // Celsius temperature here is a string
    const kelvinTemp = celsiusTemp.value + 273.15; // Convert string to number
    console.log(`The temperature in Kelvin is ${kelvinTemp}`);
}

calculateKelvin();



//Coding Challenge 1

// Given an array of forecasted max temperatures, the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will be '...17°c in 1 days...21°c in 2 days...23°c in 3 days...'.

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems.
// TEStT DATA 1: [17, 21, 23]
// TEStT DATA 2: [12, 5, -5, 0, 4];


const printForecast=function(arr)
{   let str="...";
    for(let i=0;i<arr.length;i++)
    {
       str+= (`${arr[i]}°C in ${i+1} days...`);
       
    }
    return str;
}
//Testing the function with test data
const testData1=[17,21,23];
const testData2=[12,5,-5,0,4];
console.log(printForecast(testData1)); // Should log the forecast for test data 1
console.log(printForecast(testData2)); // Should log the forecast for test data 2
*/

//Coding Challenge 2 with AI

/* Let's say you are building a time tracking app for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week and return:
1. The total number of hours worked in that week.
2. The average number of hours worked per day.
3. The day with the maximum hours worked.
4. Number of days worked.
5. Whether the week was full time (35 hours or more) 

TEST DATA 1: [7.5,8,6.5,0,8.5,4,0]
*/
function calculateWeekHours(weekHours) {
  if (!Array.isArray(weekHours) || weekHours.length !== 7) {
    throw new Error("Input must be an array of 7 daily work hours.");
  }
  let totalHours = 0;
  let count = weekHours.filter((hours) => hours > 0).length;
  for (let i = 0; i < weekHours.length; i++) {
    totalHours += weekHours[i];
  }

  let avgHours = totalHours / weekHours.length;
  let maxHours = weekHours[0];
  for (let i = 0; i < weekHours.length; i++) {
    if (weekHours[i] > maxHours) {
      maxHours = weekHours[i];
    }

    let isFullTime = totalHours >= 35 ? true : false;
    return {
      totalHoursWorked: totalHours,
      averageHours: avgHours.toFixed(2),
      maxHoursWorked: maxHours,
      daysWorked: count,
      fullTime: isFullTime,
    };
  }
}
const weekHours = [7.5, 8, 6.5, 0, 8.5, 0, 0];
console.table(calculateWeekHours(weekHours));
weekHours.pop();
console.table(calculateWeekHours(weekHours));
