require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 8080;

console.log(__dirname);
console.log(__filename);

app.get('/', async (req,res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'index.html'), 'utf-8');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.get('/about', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'about.html'), 'utf-8');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.get('/contact-me', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'contact.me.html'), 'utf-8');
        res.status(200).send(data);
    } catch (error) {
        res.status
    }
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

