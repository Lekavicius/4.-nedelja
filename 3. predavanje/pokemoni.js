let pokemons = [
    {
        name: "Charmeleon",
        species: "Flame pokemon",
        abilities: ["Blaze", "Solar power"],
        characteristics: {attack: 64, defense: 58, speed: 80}
    },
    {
        name: "Squirtle",
        species: "Dopey pokemon",
        abilities: ["Torrent", "Rain dish"],
        characteristics: {attack: 48, defense: 65, speed: 43}
    },
    {
        name: "Slowpoke",
        species: "Vine pokemon",
        abilities: ["Clorophiyll", "Leaf guard"],
        characteristics: {attack: 55, defense: 115, speed: 60}
    },
    {
        name: "Tangela",
        species: "Vine pokemon",
        abilities: ["Blaze", "Solar power"],
        characteristics: {attack: 66, defense: 58, speed: 85}
    }
]


const leftContainer = document.querySelector('.left-container');
const divFirst = document.querySelector('#first');
const leftMainButton = document.querySelector('.left-container .main-button');
const leftList = document.querySelector('.left-container .pokemon-list');
const leftReview = document.querySelector('.left-container .pokemon-review');

const rightContainer = document.querySelector('.right-container');
const divSecond = document.querySelector('#second');
const rightMainButton = document.querySelector('.right-container .main-button');
const rightList = document.querySelector('.right-container .pokemon-list');
const rightReview = document.querySelector('.right-container .pokemon-review');

function choosePokemon(button, pokemons, list, review, btnRival) {
    button.addEventListener('click',()=>{
        btnRival.textContent = '';
        pokemons.forEach(pokemon=>{
            let btnPokemon = document.createElement('button');
            btnPokemon.textContent = pokemon.name;
            list.append(btnPokemon);

            btnPokemon.addEventListener('click',()=>{
                review.innerHTML = ` <br>
                    Species: ${pokemon.species} <br> <br>
                    Abilities: ${pokemon.abilities.map(ability=>ability).join(', ')} <br> <br>
                    Characteristics: <br> <br> Attack: ${pokemon.characteristics.attack} <br>
                    Defense: ${pokemon.characteristics.defense} <br>
                    Speed: ${pokemon.characteristics.speed}
                `
            })
        })
    })
}

choosePokemon(leftMainButton,pokemons,leftList, leftReview, divFirst);
choosePokemon(rightMainButton,pokemons,rightList, rightReview, divSecond);