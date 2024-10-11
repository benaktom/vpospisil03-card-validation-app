import request from 'supertest';
import app from '../src/app';
import { config } from 'dotenv';

// Config dotenv
config();

describe('GET /card/:cardNumber/details', () => {
    it('should return card validity and state when authorized', async () => {
        const cardNumber = '9203111020153687';
        const apiKey = process.env.API_KEY;
        const res = await request(app)
            .get(`/card/${cardNumber}/details`)
            .set('x-api-key', apiKey); // Set the correct API key

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('validity');
        expect(res.body).toHaveProperty('state');
    });

    it('should return 401 when unauthorized', async () => {
        const cardNumber = '9203111020153687';
        const res = await request(app)
            .get(`/card/${cardNumber}/details`);

        expect(res.statusCode).toEqual(401);
        expect(res.text).toBe('Unauthorized');
    });
});
