const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💖 Forever Friends app running at http://localhost:${PORT}`);
});
