
const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};


fetchPokemonById(1).then(onFetchSuccess).catch(onFetchErorr)
fetchPokemonById(2).then(onFetchSuccess).catch(onFetchErorr)

function onFetchSuccess(pokemon){
  console.log(pokemon);
}
function onFetchErorr(error){
  console.log(error);
}