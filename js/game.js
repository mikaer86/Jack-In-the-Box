import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
import { timer, showTimer } from '../js/timer.js';
fetchAllPokes();

const playBtn = document.querySelector('.playBtn');
let playingStatus = false;
let startTime = false;

playBtn.addEventListener('click', function () {
    // shuffle(pokeMons);
    playingStatus = initializeBoard(pokeMons);
    startTime = showTimer();


    // startTiming()+ displaying; // the way harry said


})


for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);

    });
}
