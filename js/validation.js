'use strict'
let visible = 0;
let firstBall;
export function validateGame(ClickedBall) {
    visible++;
    if (visible === 1) {
        console.log("visible is " + visible);
        firstBall = ClickedBall;
    }
    if (visible === 2) {
        console.log("visible is " + visible);
        visible = 0;
        compare(firstBall, ClickedBall)

    }
}


function compare(firstBall, secondBall) {
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
