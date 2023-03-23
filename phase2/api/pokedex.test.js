const Pokedex = require('./pokedex')

describe('Pokedex class', () => {
  const pokedex = new Pokedex();
  
  it('returns an empty array', () => {
    expect(pokedex.all()).toEqual([])
  });

  it('returns a pokemon that has been added to the pokedex', async () => {
    await pokedex.catch('pikachu');
    expect(pokedex.all()[0].name).toEqual('pikachu')
  });
  
  it('returns two pokemons that have been added to the pokedex', async () => {
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    expect(pokedex.all()[0].name).toEqual('pikachu', 'jigglypuff')
  });
});