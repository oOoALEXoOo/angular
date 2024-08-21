import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if negative input', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should return incremented input if positive one', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
