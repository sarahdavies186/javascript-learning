const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
  it('returns the correct candy names that match search criteria', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  })
  it('returns the correct candy names that match search criteria', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
  })
  it('returns the correct candy names that match search criteria', () => { 
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  })
  it('returns the correct candy names that match search criteria', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  })
  it('returns the correct candy names that match search criteria when in lowercase', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  })
})

