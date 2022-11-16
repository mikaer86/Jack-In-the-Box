'use strict'
export const circles = document.querySelectorAll(".circle");

export function initializeBoard(pokeMons) {
    for (let i = 0; i < 12; i++) {
        circles[i].addEventListener("click", rotateCircle);
        function rotateCircle() {
            circles[i].style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeMons[i].id}.png")`;
            circles[i].classList.toggle("rotateCircle");
        }
    }
    return true;
}