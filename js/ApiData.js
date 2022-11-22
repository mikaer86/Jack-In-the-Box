'use strict'
export let pokeMons = [];
export async function fetchAllPokes() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await res.json();
    getRandomPokes(data);
}
function getRandomPokes(allPokesData) {
    const pokemonsArr = allPokesData.results;
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 50);
        fetchEachPokeData(pokemonsArr[randomIndex]);
    }
}
async function fetchEachPokeData(pokemon) {
    const url = pokemon.url;
    const res = await fetch(url);
    const data = await res.json();
    pokeMons.push(data);
}
