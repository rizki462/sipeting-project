const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// kirim Respone dengan send file dari public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'map.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});