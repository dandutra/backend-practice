import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const PORT = 8080;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === 'GET') {
            let filePath;
            if(req.url === '/') {
                filePath = path.join(__dirname, 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'about.html');
            } else if (req.url === '/contact-me') {
                filePath = path.join(__dirname, 'contact-me.html');
            } else {
                filePath = path.join(__dirname, '404.html');
            }
            const data = await fs.readFile(filePath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

