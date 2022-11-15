'use strict'
export let pokeMons = [];
export async function fetchAllPokes() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
    getRandomPokes(data);
}
function getRandomPokes(allPokesData) {
    const pokemonsArr = allPokesData.results;
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * 150);
        fetchEachPokeData(pokemonsArr[randomIndex]);
    }
}
async function fetchEachPokeData(pokemon) {
    const url = pokemon.url;
    const res = await fetch(url);
    const data = await res.json();
    pokeMons.push(data);
}
