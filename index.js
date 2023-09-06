const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', (req, res) => {
  res.send('Chupa Lucas! 🥳');
});

app.get('/about', (req, res) => {
  res.send('Rota também funciona ');
});

// Export the Express API
module.exports = app;
