    // index.js - JSON and APIs
    // Author: Aaron Rodriguez, Ethan Christian
    // Date: June 5th, 2023

    //Find the element
    outputEl=$('#output');
    title=$('comicTitle');

    //Get our data
    $.ajax({
        url: "https://xkcd.com/info.0.json ",
        type: "GET",
        dataType: "json",
        
        success: function(comicObj){
            console.log(comicObj);
            outputEl.html('<img scr="' + comicObj.img + '" alt="' + comicObj.alt + '">');
           title.html(comicObj.title);
        },
        
        error: function(error){
            console.log("An error has occured");
            console.log(error);
        }
        });
