// index.js - Javascript Events and Forms
// Author: Aaron Rodriguez, Ethan Christian
// Date: May 15th, 2023

    //Find the elements
    var inputEl = document.getElementById('user-name');

    var buttonEl = document.getElementById('my-button');

    var outputEl = document.getElementById('output');

//sort userName - borrowed function from Lab 7 that takes user input and sorts the letters of their name
    function sortName(input){
        //name is turned into array
        var nameSplit = input.split('');
        //This sorts the array
        var nameArray = nameSplit.sort();
        console.log("nameArray ", nameArray)

        //This joins the array back to a string
        var nameSorted = nameArray.join('');
        
        return nameSorted 
    }
    
    buttonEl.addEventListener('click', function(){
    var inputEl=document.getElementById('user-name');
    var inputValue=inputEl.value;
    var sortedOutput=sortName(inputValue);
    outputEl.innerHTML=sortedOutput;
    });
    