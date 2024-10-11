import express, { json } from 'express';
import { config } from 'dotenv';
import cardRoutes from './routes/cardRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Config dotenv
config();

// Create express app
const app = express();

// Get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// Middleware to parse JSON
app.use(json());

// Routes
app.get('/status', (req, res) => {
    res.send('OK');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/card', cardRoutes);

export default app;
