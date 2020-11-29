import data from './data/pokemon/pokemon.js';
import { filterRivalPokemon } from './data.js';

// LEMBRETE: a variável 'pokemons' é um ARRAY!
const pokemons = data.pokemon;
console.log(pokemons)
const searchButton = document.getElementById("search-btn");
const getSearchInput = document.getElementById("search-input");
const pokemonTable = document.getElementById("pokemon-table");

// BUSCA DO POKÉMON RIVAL
searchButton.addEventListener("click", event => {
  event.preventDefault();
  const rivalPokemon = filterRivalPokemon(pokemons, getSearchInput)

  // TABELA
  pokemonTable.innerHTML = `
    Nome: ${rivalPokemon.name} <br>
    Tipo: ${rivalPokemon.type}
  `

});

