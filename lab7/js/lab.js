// index.js - Functions
// Author: Aaron Rodriguez
// Date: May 3rd, 2023

//sort userName - function that takes user input and sorts the letters of their name
function sortUserName() {
var userName = window.prompt("Hello. Please tell me your name so I can fix it.");
console.log("userName =", userName);
//This splits string to an array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//This sorts the array
var nameArray = nameArray.sort();
console.log("nameArraySort =", nameArray);
//This joins the array back to a string
var nameSorted = nameArray.join('');
console.log("nameSorted =", nameSorted);

return nameSorted;
}

//output
document.writeln("Well look at that, I fixed your name: ",
sortUserName(), "</br>");