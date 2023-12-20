import express from 'express';
import cors from 'cors';

import diaryRouter from './routes/diaries';
import { errorHandler } from './middleware';

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());
app.use(cors());
app.use('/api/diaries', diaryRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`${BASE_URL}/api/diaries`);
});
