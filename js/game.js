window.onload = renderGame();

function renderGame() {

    const targetGameWindowElement = document.querySelector("#game-container");
    const userInput = document.querySelector("cellAmount");

    const createUserInput = document.createElement("input");
    const createGameBoardElement = document.createElement("section");
    const createGameZoneUl = document.createElement("ul");
    const createGameZoneLi = document.createElement("li");

    createUserInput.className = "cellAmount";
    createUserInput.type = "number";
    createUserInput.value = "value";
    createGameBoardElement.className ="gameBoard";
    createGameZoneUl.className = "gameBoard-zones";
    createGameZoneLi.className = "zone";

    targetGameWindowElement.append(createUserInput);
    targetGameWindowElement.append(createGameBoardElement);
    createGameBoardElement.append(createGameZoneUl);
    createGameZoneUl.append( createGameZoneLi);

  
    // inputCellAmount();
    

}

// function inputCellAmount (userInput) {

//     if(!userInput.value === null || -1){
    
//         for(let i = userInput.value; i > 0; i++ ) {


//         }

//     } else {

//         console.log("Input a none negative value");
//     }

//     return ;
// }
