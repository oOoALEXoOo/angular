import { countries } from './countries';

describe('countries', () => {
  it('should contain countries codes', () => {
    const result: string[] = countries();

    expect(result).toContain('UA');
    expect(result).toContain('FR');
    expect(result).toContain('UK');
  });
});
