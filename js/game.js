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




function renderGame() {

    const gameWindow = document.querySelector("#game-container");
    const gameBoard = document.querySelector("gameBoard");
    const gameZones = document.querySelector("gameBoard-zones");
    const loadWindow = window.onload;



    loadWindow.addEventlistener('click', function () {
        // do we need to clean board each time window is loaded ??? // zones.innerHTML = '' ??

    });





}
