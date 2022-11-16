'use strict'
export function compare(firstBall, secondBall) {
    console.log("in compares");
    console.log(firstBall.style);
    let SecondUrl = secondBall.style.backgroundImage;
    let firstUrl = firstBall.style.backgroundImage;
    if (firstUrl != SecondUrl) {
        console.log("not paired");
    }
    if (firstUrl === SecondUrl) {
        console.log("paired");
    }
}
