    // index.js - Loops
    // Author: Aaron Rodriguez, Ethan Christian
    // Date: May 24th, 2023

    //Find the element
    output = $('#output');

    //Fizzbuzz function that loops through 200
    for (i = 0; i<=200; i++){
    var str = '';

    if(i%3==0){
        str+="Fizz";
    }
        else if(i%5==0){
            str+='Buzz';

        }
        else if(i%7==0){
            str+='Boom';

        }

        if(i%3==0 | i%5==0 | i%7==0){
            output.append(str+'! <br>');
        }
        else{
            output.append(i+'<br>');
        }
    }
