import { circles } from './Board.js'
import {stopGameTimer} from './timer.js';
let visible = JSON.parse(localStorage.getItem('visible')) || 0;
let firstBall;
let firstBallIndex;
export let score = 0;
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
    return score;
}


function compare(firstBall, secondBall) {
    let firstUrl = firstBall.src;
    let secondUrl = secondBall.src;
    if (firstUrl != secondUrl) {
        setTimeout(() => {
            circles[firstBallIndex].src = "../images/PokeBall.png";
            secondBall.src = '../images/PokeBall.png';
        }, 500);
    }
    if (firstUrl === secondUrl) {
        score++;
        if(score==6){
            stopGameTimer();
        }
        //css ..
        //disable pairs

    }
}
