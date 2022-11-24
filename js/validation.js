let visible = 0;
let firstBall;
import { compare } from "./compare.js";
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
