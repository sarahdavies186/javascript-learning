const fetchPokemon = require('./fetchPokemon')

describe('fetchPokemon', () => {
  it('can return and object of data for a pokemon', (done) => {
    fetchPokemon('pikachu')
    .then((pokemon) => {
      expect(pokemon.id).toEqual(25);
      done();
    })
  });
});