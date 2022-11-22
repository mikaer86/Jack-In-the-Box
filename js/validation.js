let visible = 0;
let firstBall;
import { compare } from "../js/compare.js";
export function validateGame(playing, ball) {
    if (playing === false) {
        console.log("not in play mood");
        //if board is empty or full , for full check if allpaired()
        //css ....
        alert("click play to get started");
    }
    if (playing === true) {
        console.log("in play mood");
        visible++;
        validateBall(ball);
    }

}
function validateBall(ClickedBall) {
    if (visible === 1) {
        console.log("visible is " + visible);
        firstBall = ClickedBall; // myb local storage
    }
    if (visible === 2) {
        console.log("visible is " + visible);
        visible = 0;
        compare(firstBall, ClickedBall)

    }
}