const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Niche Tech Career Backend is Running');
});

// Placeholder for future API routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is healthy' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
