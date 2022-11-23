// import { validateGame } from '../js/validation.js';
// import { timer } from '../js/timer.js';
import { initializeBoard } from './Board.js';
const pokeList = JSON.parse(localStorage.getItem('pokeList'));

let playingStatus = false;
// let startTime = false;
// const playAgainBtn = document.querySelector('.playAgainBtn');
// playAgainBtn.addEventListener('click', function () {
//     //initialize board and reset game....
// })

playingStatus = initializeBoard(pokeList);
console.log(playingStatus);
    // startTime = showTimer();


    // startTiming()+ displaying; // the way harry said
