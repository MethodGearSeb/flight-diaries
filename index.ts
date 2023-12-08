import express from 'express';

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`${BASE_URL}/ping`);
});
