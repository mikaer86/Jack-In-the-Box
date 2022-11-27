export let circles = document.querySelectorAll(".circle");
export function initializeBoard(pokeMons) {
    // 6 becomes 12 and shuffled


    let pokemon = pokeMons.concat(pokeMons); //6 to 12
    let pickedRandom = [];
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * pokemon.length);
        pickedRandom.push(pokemon[randomIndex]);
        pokemon.splice(randomIndex, 1)
    }

    return pickedRandom;

}









