import request from 'supertest';
import app from '../src/app';

describe('GET /status', () => {
    it('should return OK', async () => {
        const res = await request(app).get('/status');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('OK');
    });
});
