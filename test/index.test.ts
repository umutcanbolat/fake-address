import { fakeAddress, CountryCode } from '../src';

describe('fakeAddress', () => {
  it('should work', () => {
    const country: CountryCode = 'DE';
    expect(fakeAddress(country)).toEqual(country);
  });
});
