const build = require('../../src/app');

describe('Root route', () => {
  let app;

  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it('should return 200 when root route is called', async () => {
    const res = await app.inject({
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ hello: 'PUTA!' });
  });
});
