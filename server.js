const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SSR Site</title>
    </head>
    <body>
        <h1>Server-Side Rendered Page</h1>
        <p>Deployed on Vercel/Netlify/Render.</p>
    </body>
    </html>
    `);
});

module.exports = app; // For Vercel/Netlify
