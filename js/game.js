<<<<<<< HEAD
window.onload = renderGameElements();
=======
//........................added from here...........
import { fetchAllPokes, pokeMons } from './ApiData.js';
//👇just call this function when ever we need a new randomed pokemond (ex:to play again)
//🧷it takes time to fetch (it's normal);
fetchAllPokes();
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
>>>>>>> f5894cf97d9e2cd48d7d9399f4cf25ec31811d76

function renderGameElements() {

    displayData = fetchPokeData(pokeMons);
    const targetGameWindowElement = document.querySelector("#game-container");
<<<<<<< HEAD
    const userInput = document.querySelector("#userInput");

=======
    const userInput = document.querySelector("cellAmount");
>>>>>>> f5894cf97d9e2cd48d7d9399f4cf25ec31811d76
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
<<<<<<< HEAD

=======
    createGameZoneUl.append( createGameZoneLi);
    loadWindow.addEventlistener('click', function () {
     // do we need to clean board each time window is loaded ??? // zones.innerHTML = '' ??
    // inputCellAmount();
    
>>>>>>> f5894cf97d9e2cd48d7d9399f4cf25ec31811d76

    const addLiData = `
   
   "<li class="zone">" ${displayData} "</li>"

   "<li class="zone">" ${displayData} "</li>"


<<<<<<< HEAD
   "<li class="zone">" ${displayData} "</li>"


   "<li class="zone">" ${displayData} "</li>"
   
   
   `;

}


=======

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

>>>>>>> f5894cf97d9e2cd48d7d9399f4cf25ec31811d76
