let timeDuration = 60;



export function stopGameTime(setInterval, updateTime) {
    updateTime();
    clearInterval(setInterval);
    alert("Game Over! Want to play Again?");
}




export function updateTime() {

    setInterval(function () {

        countDown = document.querySelector(".countDown");
        timeDuration = timeDuration - 1;

        if (timeDuration >= 0) {

            countDown.innerHTML = timeDuration;

        }

    }, 1000);
}


export function startGameTimer() {

    updateTime();

}

