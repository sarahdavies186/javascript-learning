const fetchPokemon = require('./fetchPokemon')

class Pokedex {

  constructor() {
    this.pokedex = []
  }

  async catch(pokemon) {
    const pokemonObject = await fetchPokemon(pokemon)
    this.pokedex.push(pokemonObject)
  }

  all() {
    return this.pokedex;
  }

}

module.exports = Pokedex;