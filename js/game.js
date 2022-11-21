import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
fetchAllPokes();

const playBtn = document.querySelector('.playBtn');
let playingStatus = false;

playBtn.addEventListener('click', function () {
    // shuffle(pokeMons);
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


})


for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);

    });
}
