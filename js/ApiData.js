'use strict'
const playBtn = document.querySelector('#play-btn');
const div = document.querySelector('#div');


//👇 when ever user clicks PLAY button , Board renders
playBtn.addEventListener('click', async function () {
    const allPokesData = await fetchAllPokes();
    initializeBoard(allPokesData);
})
//👇 Fetching all 150 datas from Pokemon Api and we get 150 datas in return, limit=150 is an endpoint and changeable
async function fetchAllPokes() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json();
    return data;
}
function initializeBoard(allPokesData) {
    div.innerHTML = '';
    //👇in .results we have a array of all pokemons --> each pokemon is array of 2 keys (name & url)
    const pokemonsArr = allPokesData.results;
    //👇for getting random pokemons we make random numbers between 0 to 150 -->we need to fetch url of each random pokemon to get each pokemon's info individually
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * 150);
        fetchPokeData(pokemonsArr[randomIndex]);
    }
}


function fetchPokeData(pokemon) {
    const url = pokemon.url;
    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderPoke(pokeData);
        })

}
function renderPoke(pokeData) {
    let pokeImage = document.createElement('img');
    //👇 in order to get image of a pokemon --> we need pokemon id (which is integers like 1,2,3).
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`;
    div.append(pokeImage);
    pokeImage.after(pokeData.name);
}