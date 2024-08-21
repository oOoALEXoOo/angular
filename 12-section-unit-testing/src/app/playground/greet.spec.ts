import { greet } from './greet';

describe('greet', () => {
  it('Should include name in return message', () => {
    expect(greet('Angular')).toContain('Angular');
  });
});
