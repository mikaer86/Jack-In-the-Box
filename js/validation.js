let visible = 0;
let temp;
export function validateGame(playing, ball) {
    if (playing === false) {
        console.log("not in play mood");
        //if board is empty or full , for full check if allpaired()
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
        temp = ClickedBall.style
        console.log(temp);

        //save the curent elemnt
    }
    if (visible === 2) {
        console.log("visible is " + visible);
        // comparePairs();

    }
}