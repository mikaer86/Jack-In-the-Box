
import { initializeBoard, circles } from '../js/Board.js';
import { validateGame } from '../js/validation.js';
import { startGameTimer, stopGameTimer, timeDuration } from '../js/timer.js';
const pokeMons = JSON.parse(localStorage.getItem('pokeList'));

// let startTime = false;
// const playAgainBtn = document.querySelector('.playAgainBtn');
// playAgainBtn.addEventListener('click', function () {
//     //initialize board and reset game....
// })
let playingStatus = false;
let startTime = false;
let stopTime = false;


playingStatus = initializeBoard(pokeMons);

while (playingStatus) {

    startTime = startGameTimer();

    if (timeDuration <= 0) {

        stopGameTimer();


    } else {

        console.log("Error! Try Again!");
    }

}









for (let i = 0; i < 12; i++) {

    circles[i].addEventListener("click", function () {
        validateGame(playingStatus, circles[i]);

    });
}
>>>>>>> 016ac2fcd8ec33c96c6c584041fda8478a22046c
