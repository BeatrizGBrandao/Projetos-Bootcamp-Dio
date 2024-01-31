const pokemonList = document.getElementById('pokemonList');
const loadMoreButtom = document.getElementById('loadMoreButton');
const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newList = pokemons.map((pokemon) => `
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
        `).join('');
        pokemonList.innerHTML += newList;
    })
}

loadPokemonItems(offset, limit);

loadMoreButtom.addEventListener('click', () => {
    offset += limit;
    const qtdRecordWithNextPage = offset + limit;

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);    
        
        loadMoreButtom.parentElement.removeChild(loadMoreButtom);
    } else {
        loadPokemonItems(offset, limit);
    }
})