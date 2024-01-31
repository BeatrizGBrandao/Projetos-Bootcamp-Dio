const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const searchPokeInput = document.getElementById('searchPokeInput');
const maxRecords = 151;
const limit = 10;
let offset = 0;

function renderPokemon(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span> 
        <span class="name">${pokemon.name}</span> 
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        </li>
    `
}

function loadPokemonItems(offset, limit, url) {
    pokeApi.getPokemons(offset, limit, url).then((pokemons = []) => {
        const newList = pokemons.map((pokemon) => renderPokemon(pokemon)).join('');
        pokemonList.innerHTML += newList;
        loadMoreButton.style.display = 'block';
    })
}

loadPokemonItems(offset, limit);

// Pagination Functionality

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordWithNextPage = offset + limit;

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);    
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
})

// Pokémon Search Functionality

function searchPokemonItem(pokeNameNumber) {
    pokeApi.searchPokemon(pokeNameNumber).then((pokemon) => {
        pokemonList.innerHTML = renderPokemon(pokemon);
        loadMoreButton.style.display = 'none';
    })
}

function resetPokemonList() {
    pokemonList.innerHTML = '';
    offset = 0;
    loadPokemonItems(offset, limit);
}

let searchTimeout;

searchPokeInput.addEventListener('keyup', () => {
    clearTimeout(searchTimeout); //debouncing

    searchTimeout = setTimeout(() => {
        const pokeNameNumber = searchPokeInput.value.toLowerCase();

        if (!pokeNameNumber.trim()) {
            resetPokemonList();
        } else { 
            searchPokemonItem(pokeNameNumber);        
        }
    }, 250);
})