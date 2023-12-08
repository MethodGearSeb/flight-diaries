import diaries, { addDiary as newDiary } from '../../data/diaries';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

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

const addDiary = () => {
  return newDiary({
    id: 5,
    date: '2017-05-27',
    weather: 'cloudy',
    visibility: 'good',
    comment: 'Getting the hang of this.'
  });
};

export default { getEntries, getNonSensiviteEntries, addDiary };
