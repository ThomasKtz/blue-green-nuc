const express = require('express');
const app = express();
const COLOR = process.env.COLOR || 'inconnue';
const VERSION = 'v1';
const PORT = 3000;

app.get('/', (req, res) => res.send(`<h1>Version ${COLOR} ${VERSION}</h1>`));
app.get('/health', (req, res) => res.json({ status: 'ok', color: COLOR, version: VERSION }));

app.listen(PORT, '0.0.0.0', () => console.log(`${COLOR} ${VERSION} écoute sur ${PORT}`));
