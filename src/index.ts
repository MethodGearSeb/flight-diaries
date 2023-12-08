import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());
app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`${BASE_URL}/api/diaries`);
});
