import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';

const PORT = 3000;

// Create an instance of express.
const app = express();

const server = http.createServer({
    key: fs.readFileSync(path.join(process.cwd(), 'ssl', 'privatekey.pem')),
    cert: fs.readFileSync(path.join(process.cwd(), 'ssl', 'certificate.pem')),
}, app);

// Serve the build folder.
app.use(express.static(path.join(__dirname, 'dist')));


// All remaining request returned to the React app,so it can handle routing.
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

// Start the server on desired port
server.listen(PORT, () => console.log(`Frontend is Serving on : ${PORT}`));