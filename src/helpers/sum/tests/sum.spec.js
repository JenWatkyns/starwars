import sumFunc from '..';

describe('sum function tests', () => {
  it('gives the sum of numbers in an array', () => {
    expect(sumFunc([
      {
        name: 'Luke',
        gender: 'male',
        height: 221,
      },
      {
        name: 'Leia',
        gender: 'female',
        height: NaN,
      },
      {
        name: 'R2D2',
        gender: 'n/a',
        height: 122,
      },
      {
        name: 'Jaba',
        gender: 'hermaphrodite',
        height: 220,
      },
    ])).toBe(563);
  });
});
