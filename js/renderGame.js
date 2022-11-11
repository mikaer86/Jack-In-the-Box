import { fetchAllPokes, pokeMons } from "./ApiData.js";
import { CountDown } from "./countDown.js";

const targetGameWindowElement = document.querySelector("#game-container");
const targetGameZoneElement = document.querySelector("gameBoard-zones");

function renderGameElements(pokeMons) {

    let displayData = fetchAllPokes(pokeMons);

    const createTimerElement = document.createElement("span");
    const createGameBoardElement = document.createElement("section");
    const createGameZoneUl = document.createElement("ul");
    const createGameZoneLi = document.createElement("li");

    createTimerElement.setAttribute("id", "timer");
    createGameBoardElement.setAttribute("id", "gameBoard");
    createGameZoneUl.setAttribute("id", "gameBoard-zones");
    createGameZoneLi.setAttribute("id", "zone");
    createTimerElement.innerHTML = "min" + min + ":" + sec;


    targetGameWindowElement.append(createGameBoardElement);
    createGameBoardElement.append(createGameZoneUl);

    for (let pokemon of pokeMons) {

        const pokemonCharacter = createGameZoneLi.innerHTML = pokemon.url;
        displayData.createGameZoneUl.append(pokemonCharacter);

    }



}





