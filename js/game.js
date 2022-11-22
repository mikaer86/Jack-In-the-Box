import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
import { startGameTimer, stopGameTimer, timeDuration } from '../js/timer.js';
fetchAllPokes();

const playBtn = document.querySelector('.playBtn');
let playingStatus = false;
let startTime = false;
let stopTime = false;

fetchAllPokes();
playBtn.addEventListener('click', function () {
    playingStatus = initializeBoard(pokeMons);
    startTime = showTimer();


    // startTiming()+ displaying; // the way harry said


});


// for (let i = 0; i < 12; i++) {
//     circles[i].addEventListener("click", function () {
//         validateGame(playingStatus, circles[i]);

    });
}
