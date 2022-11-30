import { fetchAllPokes } from './ApiData.js';
import { initializeBoard, circles } from './Board.js';
import { validateGame } from '../js/validation.js';

import { startGameTimer, hasTime } from './timer.js';
let playAgainBtn = document.querySelector('.playAgainBtn');
let scoreEl = document.querySelector('.score');

let setGame = () => {
    let pokeMons = JSON.parse(localStorage.getItem('pokeList'));
    let shuffledPoke = initializeBoard(pokeMons);
    startGameTimer();
    for (let i = 0; i < 12; i++) {
        circles[i].addEventListener("click", function (event) {
            event.stopPropagation()
            circles[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shuffledPoke[i].id}.png`;
            if (hasTime) {
                let score = validateGame(circles[i], i);
                updateScore(score);
            }
            if (!hasTime) {
                alert("game over");
                disableBoard();
            }
        });
    }
}

playAgainBtn.addEventListener('click', function () {

    localStorage.setItem('visible', JSON.stringify(0));
    for (let i = 0; i < 12; i++) {
        circles[i].src = "../images/PokeBall.png";
        circles[i].removeEventListener();
    }
    updateScore(0)
    fetchAllPokes();
    setGame();
})

function disableBoard() {
    console.log("in no time");
    console.log(circles);
    for (let i = 0; i < 12; i++) {
        circles[i].src = "../images/pikapika.jpg";

    }
}
let updateScore = (score) => {
    scoreEl.innerHTML = score;
}
setGame();
