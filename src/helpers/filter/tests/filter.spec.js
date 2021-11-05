import filterFunc from '..';

describe('Filter Function tests', () => {
  it('returns the correct array after being filtered for male', () => {
    expect(filterFunc([
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
    ], 'male')).toEqual([{
      name: 'Luke',
      gender: 'male',
      height: 221,
    }]);
  });

  it('returns the correct array after being filtered for female', () => {
    expect(filterFunc([
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
    ], 'female')).toEqual([{
      name: 'Leia',
      gender: 'female',
      height: 202,
    }]);
  });

  it('returns the correct array after being filtered for other', () => {
    expect(filterFunc([
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
    ], 'other')).toEqual([
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
    ]);
  });
});
