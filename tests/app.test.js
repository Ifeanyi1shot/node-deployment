const request = require('supertest');
const app = require('../src/app');

describe('Health Check', () => {
  it('GET /health should return 200 with status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});

describe('API Info', () => {
  it('GET /api/info should return company info', async () => {
    const res = await request(app).get('/api/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.company).toBe('Olin Cloud Services');
  });
});

describe('Static Site', () => {
  it('GET / should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
