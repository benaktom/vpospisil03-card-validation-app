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

// [CR]
// tohle neni potřeba, výsledkem má být api, takže neni nutné vystavovat statické soubory
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// [CR]
// api nepřijímá žádná data, takže neni potřeba parsovat json
// Middleware to parse JSON
app.use(json());

// [CR]
// možná tu chybí middleware pro logování requestů, ale to je spíš doporučení, než chyba

// Routes
app.get('/status', (req, res) => {
    res.send('OK');
});

// [CR]
// viz výše
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/card', cardRoutes);

// [CR]
// bylo by vhodné přidat middleware pro zachycení chybových stavů
// koukal jsem ale, že chyby se odchytávají v jednotlivých routerech/controllerech, takže to kritické asi nebude, jen je 
// běžná praxe vyhazovat nějaké chyby a response posílat až nakonec
// chyby se vrací v html, což je také nevhodné, když zbytek api vrací json

export default app;
