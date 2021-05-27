/*BINGO CHALLENGE!!!
Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board

EXTRA: 
- Take ALWAYS a new number (eg. avoid randoming the number 10 3 times)
- Create a USER BOARD with 24 randomized numbers that highlights as the main board does
- Let the user choose HOW MANY user boards he's willing to play with and create them.*/

//CREATE A FUNCTION WITH A FOR LOOP FOR 76 CELLS
//THE NUMBER GENERATED EQUAL TO THE BOARD SHOULD TRIGGER AN EVENT



const createANewCell = function(){

let bingoSelector = document.getElementById("board-container")

bingoSelector.innerHtml = ""

for(let i = 1; i <= 76; i++){
    
    let newCell = document.createElement("div")

    newCell.innerText = i
    newCell.classList.add("cell")

    bingoSelector.appendChild(newCell)

}

}

