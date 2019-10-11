import app from './app';

describe('app', () => {
  it('should return `app`', () => {
    expect.assertions(1);
    expect(app).toBe('app');
  });
});
