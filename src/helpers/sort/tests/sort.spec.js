import sortFunc from '..';

describe('sort function tests', () => {
  it('sort function sorts by name', () => {
    expect(sortFunc([
      {
        name: 'Luke',
        gender: 'male',
        height: 221,
      },
      {
        name: 'Leia',
        gender: 'female',
        height: 202,
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
    ], 'name', true)).toEqual([
      {
        name: 'Jaba',
        gender: 'hermaphrodite',
        height: 220,
      },
      {
        name: 'Leia',
        gender: 'female',
        height: 202,
      },
      {
        name: 'Luke',
        gender: 'male',
        height: 221,
      },
      {
        name: 'R2D2',
        gender: 'n/a',
        height: 122,
      },
    ]);
  });

  it('sort function sorts by height', () => {
    expect(sortFunc([
      {
        name: 'Luke',
        gender: 'male',
        height: 221,
      },
      {
        name: 'Leia',
        gender: 'female',
        height: 202,
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
    ], 'height', true)).toEqual([
      {
        name: 'R2D2',
        gender: 'n/a',
        height: 122,
      },
      {
        name: 'Leia',
        gender: 'female',
        height: 202,
      },
      {
        name: 'Jaba',
        gender: 'hermaphrodite',
        height: 220,
      },
      {
        name: 'Luke',
        gender: 'male',
        height: 221,
      },
    ]);
  });
});
