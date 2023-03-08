

/*
NUOVO ESERCIZIO
_______________________________________________________________________________________________________________
*/

//Applico le variabili
let secondEl = document.getElementById("second-container");

let buttonEl = document.getElementById("button");


let maxNumber = 100;

buttonEl.addEventListener('click', function(){

    

    for( let i = 1; i <= maxNumber; i++){

        let newSquareEl = document.createElement('div');

        gridEl.append(newSquareEl);

        newSquareEl.innerText = i;

        newSquareEl.addEventListener('click', function(){

            
        })
    }
})
