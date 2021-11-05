import convertFunc from '..';

describe('This function converts centimeters to feet', () => {
  it('gives the height in feet', () => {
    expect(convertFunc(170)).toBe(5.57742782152231);
  });
});
