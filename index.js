const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.get('/fishMonger', (req, res) => {
    res.json({
        fish: "Albacore",
        orca: "shamu",
        poke: "bowl"
    })
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});