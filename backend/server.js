const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  const { message } = req.body;
  const response = `AI Response: We're here for you. You said: "${message}"`;
  res.json({ response });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});