// task 01

var money = 1000; 
var applePrice = 400;
var orangePrice = 300;
var cost = applePrice + orangePrice;
var back = money- cost;
console.log(back)

// task 02
var bangla = 75.25;
var mathematics = 65;
var biology =80; 
var chemistry = 34.45
var physics = 99.50;
var totalMarks = bangla+mathematics+biology+chemistry+physics;
 var length = totalMarks/5;

console.log(length.toFixed(2));

let numbers = [65, 80, 34.45,90.5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / numbers.length;

console.log("Average:", average);

var number = 119;
var remainder = 119%5;
console.log(remainder)
