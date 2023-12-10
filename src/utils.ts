import { NewDiaryEntry, Visibility, Weather } from './types';

const incorrectOrMissing = (value?: unknown): Error => {
  const message =
    value && typeof value === 'string'
      ? `incorrect value: ${value}`
      : 'incorrect or missing value';
  return new Error(message);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) throw incorrectOrMissing(comment);
  return comment;
};

const isDate = (date: string): boolean => {
  return !!Date.parse(date);
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) throw incorrectOrMissing(date);
  return date;
};

const isWeather = (weather: string): weather is Weather => {
  return Object.values(Weather)
    .map((w) => w.toString())
    .includes(weather);
};

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isString(weather) || !isWeather(weather))
    throw incorrectOrMissing(weather);
  return weather;
};

const isVisibility = (visibility: string): visibility is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(visibility);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isString(visibility) || !isVisibility(visibility))
    throw incorrectOrMissing(visibility);
  return visibility;
};

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (
    !object ||
    typeof object !== 'object' ||
    !(
      'date' in object &&
      'weather' in object &&
      'visibility' in object &&
      'comment' in object
    )
  ) {
    throw incorrectOrMissing();
  }

  const { date, weather, visibility, comment } = object;
  const newDiaryEntry: NewDiaryEntry = {
    date: parseDate(date),
    weather: parseWeather(weather),
    visibility: parseVisibility(visibility),
    comment: parseComment(comment)
  };

  return newDiaryEntry;
};

export default { toNewDiaryEntry };
