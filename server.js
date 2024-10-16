import app from './src/app.js';

// Set port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    // [CR]
    // console.log není doporučeno používat pro produkční logování, je vhodné použít nějaký logovací framework, např. winston nebo pino
    console.log(`Server running on http://localhost:${port}`);
});
