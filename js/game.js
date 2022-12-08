import { fetchAllPokes } from "./ApiData.js";
import { initializeBoard, circles } from "./Board.js";
import { validateGame,resetScore} from "../js/validation.js";
import { startGameTimer, hasTime, stopGameTimer } from "./timer.js";
let playAgainBtn = document.querySelector(".playAgainBtn");
let scoreEl = document.querySelector(".score");
let shuffledPoke;

export function disableBoard() {
    for (let i = 0; i < 12; i++) {
        circles[i].src = "../images/pikapika.jpg";
    }
}

let setGame = () => {
    let pokeMons = JSON.parse(localStorage.getItem("pokeList"));
    shuffledPoke = initializeBoard(pokeMons);
    startGameTimer();
};


let updateScore = (score) => {
    scoreEl.innerHTML = score;
};

playAgainBtn.addEventListener("click", function () {
    fetchAllPokes();
    updateScore(0);
    resetScore(0);
    localStorage.setItem("visible", JSON.stringify(0));
    for (let i = 0; i < 12; i++) {
        circles[i].src = "../images/PokeBall.png";
    }
    setGame();
});

for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function (event) {
        event.stopPropagation();
        circles[i].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shuffledPoke[i].id}.png`;
        if (hasTime) {
            let score = validateGame(circles[i], i);
            updateScore(score);
        }
        else  {
            disableBoard();
            stopGameTimer("TIME OVER");
        }
    });
}
setGame();
