import { fetchAllPokes, pokeMons } from './ApiData.js';
//👇just call this function when ever we need a new randomed pokemond (ex:to play again)
const data = fetchAllPokes();
//🧷it takes time to fetch (it's normal);
setTimeout(() => {
    console.log(pokeMons[1].id);
    let pokeImage = document.createElement('img');
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMons[1].id}.png`;
    document.body.append(pokeImage);
}, 4000);


function renderGame() {

    const gameWindow = document.querySelector("#game-container");
    const gameBoard = document.querySelector("gameBoard");
    const gameZones = document.querySelector("gameBoard- zones");
    const loadWindow = window.onload;



    loadWindow.addEventlistener('click', function () {
        //clean board each time window is loaded ??? // zones.innerHTML = '' ??
    });





}
