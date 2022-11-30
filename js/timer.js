'use strict'
let timeDuration;
export let hasTime;
let countDown = document.querySelector(".countDown");

function stopGameTimer(setInterval, updateTime) {
    clearInterval(hasTime);
    hasTime = null;
    // alert("Game Over! Want to play Again?");
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
    timeDuration = 60;
    hasTime = setInterval(updateTime, 1000);
}

