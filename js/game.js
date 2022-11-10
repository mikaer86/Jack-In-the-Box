//........................added from here...........
import { fetchAllPokes, pokeMons } from './ApiData.js';
//👇just call this function when ever we need a new randomed pokemond (ex:to play again)
//🧷it takes time to fetch (it's normal);

let pok = fetchAllPokes();
const zones = document.querySelectorAll(".zone");
setTimeout(() => {
    for (let i = 0; i < pokeMons.length; i++) {
        let pokeImage = document.createElement('img');
        pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMons[i].id}.png`;
        zones[i].append(pokeImage);
    }

}, 3000);

//..........................to here..........................





function renderGame() {

    const gameWindow = document.querySelector("#game-container");
    const gameBoard = document.querySelector("gameBoard");
    const gameZones = document.querySelector("gameBoard-zones");
    const loadWindow = window.onload;

=======
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
    loadWindow.addEventlistener('click', function () {
     // do we need to clean board each time window is loaded ??? // zones.innerHTML = '' ??
    // inputCellAmount();
    

}

// function inputCellAmount (userInput) {


=======
//     if(!userInput.value === null || -1){
//         for(let i = userInput.value; i > 0; i++ ) {
//         }
//     } else {


//         console.log("Input a none negative value");
//     }

d
}
=======
//     return ;
// }

