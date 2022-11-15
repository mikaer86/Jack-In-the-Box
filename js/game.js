import { fetchAllPokes, pokeMons } from './ApiData.js';
fetchAllPokes();


setTimeout(() => {
    for (let i = 0; i < pokeMons.length; i++) {
        let pokeImage = document.createElement('img');
        pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMons[i].id}.png`;
        zones[i].append(pokeImage);
    }
}, 3000);
//..........................to here..........................

// const gameWindow = document.querySelector(".game-container");
// const gameBoard = document.querySelector(".gameBoard");
const circles = document.querySelectorAll(".circle");
// const loadWindow = window.onload;

// window.onload = renderGame();

function initializeBoard() {


    // const targetGameWindowElement = document.querySelector("#game-container");
    // const userInput = document.querySelector("cellAmount");
    // const createUserInput = document.createElement("input");
    // const createGameBoardElement = document.createElement("section");
    // const createGameZoneUl = document.createElement("ul");
    // const createGameZoneLi = document.createElement("li");
    // createUserInput.className = "cellAmount";
    // createUserInput.type = "number";
    // createUserInput.value = "value";
    // createGameBoardElement.className = "gameBoard";
    // createGameZoneUl.className = "gameBoard-zones";
    // createGameZoneLi.className = "zone";
    // targetGameWindowElement.append(createUserInput);
    // targetGameWindowElement.append(createGameBoardElement);
    // createGameBoardElement.append(createGameZoneUl);
    // createGameZoneUl.append(createGameZoneLi);
    // loadWindow.addEventlistener('click', function () {
    //     // do we need to clean board each time window is loaded ??? // zones.innerHTML = '' ??
    //     // inputCellAmount();


}