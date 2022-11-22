import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
import { timer } from '../js/timer.js';
const playBtn = document.querySelector('.playBtn');
let playingStatus = false;
let startTime = false;

fetchAllPokes();
playBtn.addEventListener('click', function () {
    playingStatus = initializeBoard(pokeMons);
    console.log(playingStatus);
    // startTime = showTimer();


    // startTiming()+ displaying; // the way harry said


})


// for (let i = 0; i < 12; i++) {
//     circles[i].addEventListener("click", function () {
//         validateGame(playingStatus, circles[i]);

//     });
// }
