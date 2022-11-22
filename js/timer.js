
'use strict'
let timeInterval;
export let timeDuration = 60;
let countDown;

export function stopGameTimer() {

    clearInterval(timeInterval);

    alert("Game Over! want to play again?");

}

function updateTime() {


    setInterval(function () {

        countDown = document.querySelector(".countDown");
        timeDuration = timeDuration - 1;

        if (timeDuration >= 0) {

            countDown.innerText = timeDuration;

        }

    }, 1000);

}


export function startGameTimer() {

    updateTime();

}

