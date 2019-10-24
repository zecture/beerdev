'use strict';

const express = require('express');

// Constants
const PORT = 8080;
//reverse HOST for docker image
//const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))