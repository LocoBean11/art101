    // index.js - Loops
    // Author: Aaron Rodriguez, Ethan Christian
    // Date: May 31st, 2023

    //Find the element
    outputEl=$('#output');
    //Find the button element
    buttonEl=$('#pokeButton');

    buttonEl.click(function(){$.ajax({

        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",

        success: function(data){
            console.log(data);
            outputEl.html(data.value);
        },

        error: function(error){
            console.log("An error has occured");
            console.log(error);
        }
        })});
