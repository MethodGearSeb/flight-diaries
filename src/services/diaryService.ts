import diaries from '../../data/diaries';
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensiviteEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map((entry) => {
    const partialEntry = entry as Partial<DiaryEntry>;
    delete partialEntry.comment;
    return partialEntry as NonSensitiveDiaryEntry;
  });
};

const findById = (id: number | string): DiaryEntry | undefined => {
  return diaries.find(({ id: diaryId }) => diaryId == id);
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map(({ id }) => id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default { getEntries, getNonSensiviteEntries, findById, addDiary };
