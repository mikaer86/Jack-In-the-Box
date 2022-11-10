'use strict'
// const playBtn = document.querySelector('#play-btn');
// const zones = document.querySelectorAll('.zone');
export let pokeMons = [];
//👇 Fetching all 150 datas from Pokemon Api and we get 150 datas in return, limit=150 is an endpoint and changeable
export async function fetchAllPokes() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
    initializeBoard(data);
    return pokeMons;
}
function initializeBoard(allPokesData) {
    //👇in .results we have a array of all pokemons --> each pokemon is array of 2 keys (name & url)
    const pokemonsArr = allPokesData.results;
    //👇for getting random pokemons we make random numbers between 0 to 150 -->we need to fetch url of each random pokemon to get each pokemon's info individually
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * 150);
        fetchPokeData(pokemonsArr[randomIndex]);
    }
}


async function fetchPokeData(pokemon) {
    const url = pokemon.url;
    const res = await fetch(url);
    const data = await res.json();
    pokeMons.push(data);
}


// let pokeImage = document.createElement('img');
// 👇 in order to get image of a pokemon --> we need pokemon id (which is integers like 1,2,3).
// pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`;
// div.append(pokeImage);
// pokeImage.after(pokeData.name);