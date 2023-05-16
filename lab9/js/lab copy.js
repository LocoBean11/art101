// index.js - Javascript for the Web
// Author: Aaron Rodriguez, Ethan Christian
// Date: May 10th, 2023

//Find the element
var outputEl = document.getElementById("output");

//Creating elements
var new1El = document.createElement("p");
new1El.innerHTML = "Dedicate your hearts!"

var new2El = document.createElement("p");
new2El.innerHTML = "Your hearts and souls to the cause!"

//Append elements one at a time
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Change css attributes
outputEl.style.color="brown";

outputEl.style.backgroundColor="lightblue";

outputEl.style.fontSize = "20px";