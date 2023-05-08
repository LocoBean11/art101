// index.js - Anon Functions and Callbacks
// Author: Aaron Rodriguez, Ethan Christian
// Date: May 8th, 2023

array = [50, 100, 251, 345, 2112];
console.log('My array is', array);

function callBack(x) {
  var results = x * 2;
  return results;
}

//function test

console.log('12 times 2 is: ', callBack(12));

console.log('1987 times 2 is: ', callBack(1987));

console.log('My array times 2: ', array.map(callBack));

console.log('My array times 2: ', array.map(callBack));

var results = array.map(function(x){
  return x%2 !=0;
  
})

console.log('These numbers were odd in my array: ', results);

