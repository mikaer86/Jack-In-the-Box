import {disableBoard} from "./game.js";
let timeDuration;
export let hasTime;
let countDown = document.querySelector(".countDown");

export function startGameTimer() {
    timeDuration =30;
    hasTime = setInterval(updateTime, 1000);
}

export function updateTime() {
    timeDuration = timeDuration - 1;
    if (timeDuration >= 0) {
        countDown.innerHTML = timeDuration;
    }
    if (timeDuration < 0) {
        disableBoard();
        stopGameTimer("TIME OVER");
    }

}

export function stopGameTimer(message) {
    clearInterval(hasTime);
    hasTime=null;
    alert(message);
}