import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_, res) => {
  res.json(diaryService.getNonSensiviteEntries());
});

router.post('/', (_, res) => {
  res.send(diaryService.addDiary());
});

export default router;
