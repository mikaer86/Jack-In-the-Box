'use strict'
let timeDuration;
export let hasTime;
let countDown = document.querySelector(".countDown");

export function stopGameTimer(setInterval, updateTime) {
    clearInterval(hasTime);
    console.log(hasTime);
    // hasTime = null;
    alert("Game Over!");
}


export function updateTime() {
    timeDuration = timeDuration - 1;
    if (timeDuration >= 0) {
        countDown.innerHTML = timeDuration;
    }
    if (timeDuration < 0) {
        stopGameTimer();
        //disableBoard()
    }

}

export function startGameTimer() {
    timeDuration =30;
    hasTime = setInterval(updateTime, 1000);
}

