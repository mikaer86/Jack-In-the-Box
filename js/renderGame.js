








///this file can be deleted






import { fetchAllPokes, pokeMons } from "./ApiData.js";

let pairArray = [];
let index = 0;
fetchAllPokes();

function renderGameElements() {


    // Targeting the game container and gameBoard
    const targetGameWindowElement = document.querySelector("#game-container");
    const targetGameBoardElement = document.querySelector("#gameBoard");


    // create  timer, gameBoard and gameZones
    const createTimerElement = document.createElement("span");
    const createGameBoardElement = document.createElement("section");
    const createGameZoneUl = document.createElement("ul");

    // set element attributes
    createTimerElement.setAttribute("id", "timer");
    createTimerElement.innerHTML = "05:00";

    createGameBoardElement.setAttribute("class", "gameBoard");
    createGameZoneUl.setAttribute("class", "gameBoard-zones");

    // add elements to the DOM
    targetGameWindowElement.append(createTimerElement);
    targetGameWindowElement.append(createGameBoardElement);

    // loop through the data within the list elements
    for (let i = 0; i < 12; i++) {


        setTimeout(() => {

            const createGameZoneLi = document.createElement("li");
            const createGameZoneImg = document.createElement("img");

            createGameZoneImg.setAttribute("src", "#");
            createGameZoneImg.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMons[i].id}.png`;
            createGameZoneLi.setAttribute("class", "zone");

            createGameBoardElement.append(createGameZoneUl)
            createGameZoneUl.append(createGameZoneLi);
            createGameZoneLi.append(createGameZoneImg);


        }, 1500);


    }
    compareID(pokeMons);

}

const compareID = async (pokeMons) => {



}

renderGameElements();










