
function timer() {

    let currentTime = date.now();
    let timeDuration = timeDuration - (date.now() - currentTime / 1000) | 0;
    seconds;


    let seconds = timeDuration % 60 | 0;
    let condSeconds = seconds < 10 ? "0" + seconds : seconds;


    setInterval(function () {




    }, 1000);


}