const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log('서버실행');
});
