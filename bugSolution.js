const express = require('express');
const app = express();
// Ensure express.json() is used BEFORE other middleware that might modify the request
app.use(express.json());
app.post('/data', (req, res) => {
  console.log('Received data:', req.body); 
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});