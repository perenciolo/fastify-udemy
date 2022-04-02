const build = require('../../src/app');

describe('Root route', () => {
  let app;

  beforeAll(() => {
    app = build();
  });

  afterAll(() => {
    app.close();
  });

  it('should return 200 when get route is called', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/api/v1/test',
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual(expect.any(Array));
  });

  it('should return id when post route is called with valid data', async () => {
    const res = await app.inject({
      method: 'POST',
      url: '/api/v1/test',
      payload: {
        title: 'SOME TEST TITLE',
      },
    });

    expect(res.statusCode).toBe(201);
    expect(res.json()).toEqual({ id: expect.any(String) });
  });
});
