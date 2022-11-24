export let circles = document.querySelectorAll(".circle");
export function initializeBoard(pokeMons) {
    let shuffledPoke = shuffle(pokeMons); // 6 becomes 12 and shuffled
    for (let i = 0; i < shuffledPoke.length; i++) {
        circles[i].addEventListener("click", rotateCircle);
        function rotateCircle() {
            circles[i].style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shuffledPoke[i].id}.png")`;
            circles[i].classList.toggle("rotateCircle");
        }
    }
    return true;
}

function shuffle(pokeMons) {
    let pokemon = pokeMons.concat(pokeMons); //6 to 12
    let pickedRandom = [];
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * pokemon.length);
        pickedRandom.push(pokemon[randomIndex]);
        pokemon.splice(randomIndex, 1)
    }
    return pickedRandom;
}










