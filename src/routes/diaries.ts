import express from 'express';
import diaryService from '../services/diaryService';
import { NewDiaryEntry } from '../types';
import { toNewDiaryEntry } from '../utils';

const router = express.Router();

router.get('/', (_, res) => {
  res.json(diaryService.getNonSensiviteEntries());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const diaryEntry = diaryService.findById(id);

  if (diaryEntry) res.send(diaryEntry);
  else res.sendStatus(404);
});

router.post('/', (req, res) => {
  const entry: NewDiaryEntry = toNewDiaryEntry(req.body);
  const addedDiary = diaryService.addDiary(entry);

  res.send(addedDiary);
});

export default router;
