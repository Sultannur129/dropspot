const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('DropSpot backend çalışıyor!');
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} adresinde çalışıyor`);
});
