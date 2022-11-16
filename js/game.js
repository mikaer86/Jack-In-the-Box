import { fetchAllPokes, pokeMons } from './ApiData.js';
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
fetchAllPokes();

const playBtn = document.querySelector('.playBtn');
let playingStatus = false;

playBtn.addEventListener('click', function () {
    // shuffle(pokeMons);
    playingStatus = initializeBoard(pokeMons);
    // startTiming()+displaying; // the way harry said

})


for (let i = 0; i < 12; i++) {
    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);

    });
}
