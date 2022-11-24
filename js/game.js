import { fetchAllPokes } from './ApiData.js';
import { initializeBoard, circles } from './Board.js';
import { validateGame } from '../js/validation.js';
import { startGameTimer, hasTime } from './timer.js';
const pokeMons = JSON.parse(localStorage.getItem('pokeList'));
const playAgainBtn = document.querySelector('.playAgainBtn');

initializeBoard(pokeMons);
startGameTimer();
for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        if (hasTime) {
            validateGame(circles[i]);
        }
        if (!hasTime) {
            //disableBoard();
        }
    });
}

playAgainBtn.addEventListener('click', function () {
    fetchAllPokes();
    initializeBoard(pokeMons);
    startGameTimer();
})