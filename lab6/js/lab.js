// index.js - Arrays and Objects
// Author: Aaron Rodriguez
// Date: May 1st, 2023

// Define Variables
var myTransport = [" bike ", " car ", " airplane ", " train "]

//Main ride object
var myMainRide = {
    make : "Toyota",
    model : "Corolla",
    color : "Silver",
    year : 2003,
  
    age : function() {
      return 2023 - this.year;
  }
}


document.writeln("The forms of transportation that I like to use:  ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>" );
