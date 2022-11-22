import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
import { startGameTimer, stopGameTimer, timeDuration } from '../js/timer.js';
fetchAllPokes();

const playBtn = document.querySelector('.playBtn');
let playingStatus = false;
let startTime = false;
let stopTime = false;

playBtn.addEventListener('click', function () {
    // shuffle(pokeMons);
    playingStatus = initializeBoard(pokeMons);

    if (playingStatus) {

        startTime = startGameTimer();

        while (startTime) {

            if (timeDuration <= 0) {

                stopTime = stopGameTimer();

            }


        }


        // startTiming()+ displaying; // the way harry said


    });


for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);


    });
}
