import { fetchAllPokes, pokeMons } from ".js/ApiData.js";

function renderGameElements(pokeMons) {

    let displayData = fetchAllPokes(pokeMons);
    const targetGameWindowElement = document.querySelector("#game-container");
    const createUserInput = document.createElement("input");
    const createGameBoardElement = document.createElement("section");
    const createGameZoneUl = document.createElement("ul");
    const createGameZoneLi = document.createElement("li");

    createUserInput.classList.add("cellAmount");
    createUserInput.setAttribute("type", "number");
    createUserInput.setAttribute("min", "0");
    createUserInput.setAttribute("id", "userInput");
    createGameBoardElement.setAttribute("id", "gameBoard");
    createGameZoneUl.setAttribute("id", "gameBoard-zones");
    createGameZoneLi.setAttribute("id", "zone");


    targetGameWindowElement.append(createUserInput);
    targetGameWindowElement.append(createGameBoardElement);
    createGameBoardElement.append(createGameZoneUl);

    const addLiData = `
   
   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"
    
   `;

    createGameZoneUl.append(addLiData);

}





