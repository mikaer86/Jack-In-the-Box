import { circles } from './Board.js'
let visible = 0;
let firstBall;
let firstBallIndex;
export function validateGame(ClickedBall, i) {
    visible++;
    if (visible === 1) {
        firstBall = ClickedBall;
        firstBallIndex = i;
    }
    if (visible === 2) {
        compare(firstBall, ClickedBall);
        visible = 0;
    }
}


function compare(firstBall, secondBall) {
    let firstUrl = firstBall.src;
    let secondUrl = secondBall.src;
    if (firstUrl != secondUrl) {
        console.log(firstBall.disabled);
        setTimeout(() => {
            circles[firstBallIndex].src = "../images/PokeBall.png";
            secondBall.src = '../images/PokeBall.png';
        }, 1000);
    }
    if (firstUrl === secondUrl) {
        console.log(secondBall);

        //css ..
        //disable pairs
        //score++ local storage
    }
}
