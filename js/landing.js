import { fetchAllPokes } from './ApiData.js';
fetchAllPokes();

const playBall = document.querySelector('.play-ball');
playBall.addEventListener('click', function () {
    document.location.href = "../game.html";
})

