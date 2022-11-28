import { fetchAllPokes } from './ApiData.js';
import { initializeBoard, circles } from './Board.js';
import { validateGame } from '../js/validation.js';
import { startGameTimer, hasTime } from './timer.js';
const pokeMons = JSON.parse(localStorage.getItem('pokeList'));
const playAgainBtn = document.querySelector('.playAgainBtn');
let shuffledPoke = initializeBoard(pokeMons);
startGameTimer();
for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        circles[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shuffledPoke[i].id}.png`;
        if (hasTime) {
            validateGame(circles[i], i);
        }
        if (!hasTime) {
            //disableBoard();
        }
    });
}

function disableBoard() {
    console.log(circles);
    for (let i = 0; i < 12; i++) {
        circles[i].disabled = 'true';

    }
}
playAgainBtn.addEventListener('click', function () {
    fetchAllPokes();
    initializeBoard(pokeMons);
    startGameTimer();
})