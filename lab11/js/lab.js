    // index.js - Javascript Events and Forms
    // Author: Aaron Rodriguez, Ethan Christian
    // Date: May 17th, 2023

    //Find the elements
    var challengeEl = $('#challenge');

    var problemEl = $('#problem');

    var outputEl = $('#output');

    var reflectionEl = $('#reflection');

    var resultsEl = $('#results');

    //Creating the buttons

    var cButton = $('<button> Click me! </button>');
    var pButton = $('<button> Click me! </button>');
    var reButton = $('<button> Click me! </button>');
    var rButton = $('<button> Click me! </button>');

    //Adding the buttons to the elements

    challengeEl.append(cButton);
    problemEl.append(pButton);
    reflectionEl.append(reButton);
    resultsEl.append(rButton);

    function specialTap(id){
    id.toggleClass('special');
    }

    cButton.on('click', function(){
    specialTap(challengeEl);
    });

    pButton.on('click', function(){
        specialTap(problemEl);
        });
    reButton.on('click', function(){
        specialTap(reflectionEl);
        }); 
    rButton.on('click', function(){
        specialTap(resultsEl);
        });

