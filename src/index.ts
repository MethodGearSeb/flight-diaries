import express from 'express';
import 'express-async-errors';

import diaryRouter from './routes/diaries';
import { errorHandler } from './middleware';

const app = express();
const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

app.use(express.json());
app.use('/api/diaries', diaryRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`${BASE_URL}/api/diaries`);
});
