const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Interior Vista API');
});

module.exports = app;
