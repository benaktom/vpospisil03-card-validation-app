import app from './src/app.js';

// Set port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
