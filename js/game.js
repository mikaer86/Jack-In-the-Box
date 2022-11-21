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
<<<<<<< HEAD
    playingStatus = initializeBoard(pokeMons); //full=0
    // startTiming() + displaying; // the way harry said
    // timer = setInterval(() => {
    //     timeElement = 15--;
    //     if(time){
    //         check(full); 12?or not
    //     }
    //     if (timer != true) {
    //         playingStatus = false
    //     }
    // }, 1000);

=======
    playingStatus = initializeBoard(pokeMons);
    startTime = showTimer();


    // startTiming()+ displaying; // the way harry said
>>>>>>> e0604cf0feae0f661cb00ec7fe58248a3733cb89


})


for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);

    });
}
