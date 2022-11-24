'use strict'
export function compare(firstBall, secondBall) {
    console.log("in compares");
    let SecondUrl = secondBall.style.backgroundImage;
    let firstUrl = firstBall.style.backgroundImage;
    if (firstUrl != SecondUrl) {
        console.log("not paired");
        //set time to rotate back
    }
    if (firstUrl === SecondUrl) {
        console.log("paired");
        //css ..
        //disable pairs
        //score++ local storage
    }
}
