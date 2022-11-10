window.onload = renderGameElements();

function renderGameElements() {

    displayData = fetchPokeData(pokeMons);
    const targetGameWindowElement = document.querySelector("#game-container");
    const userInput = document.querySelector("#userInput");

    const createUserInput = document.createElement("input");
    const createGameBoardElement = document.createElement("section");
    const createGameZoneUl = document.createElement("ul");
    const createGameZoneLi = document.createElement("li");

    createUserInput.classList.add("cellAmount");
    createUserInput.type = "number";
    createUserInput.min = "1";
    createUserInput.setAttribute("id", "userInput");
    createGameBoardElement.setAttribute("id", "gameBoard");
    createGameZoneUl.setAttribute("id", "gameBoard-zones");
    createGameZoneLi.setAttribute('id', "zone");

    targetGameWindowElement.append(createUserInput);
    targetGameWindowElement.append(createGameBoardElement);
    createGameBoardElement.append(createGameZoneUl);


    const addLiData = `
   
   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"


   "<li class="zone">" ${displayData} "</li>"


   "<li class="zone">" ${displayData} "</li>"
   
   
   `;

}


