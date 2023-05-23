    // index.js - Javascript Events and Forms
    // Author: Aaron Rodriguez, Ethan Christian
    // Date: May 22nd, 2023

    //Find the elements

    buttonEl = $('#button');

    inputEl = $('#input');

    outputEl = $('#output');

    //sortingHat function which sorts based on the remainder from 4

    function sortingHat(str) {
        var length = str.length;

        mod = length % 4;

        if (mod == 0) {
        return "Gryffindor";
        }
        else if(mod == 1){
        return "Ravenclaw";
        }
        else if(mod == 2){
        return "Slytherin";
        }
        else if(mod == 3){
        return "Hufflepuff";
        }
    }

        buttonEl.on('click', function() {
            house = sortingHat(inputEl.val());

            outputEl.append("The Sorting Hat has sorted you into " + house + '</p>');
            });