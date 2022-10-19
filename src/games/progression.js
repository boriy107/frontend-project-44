import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';

const minRange = 1;
const maxRange = 50;
const minStep = 1;
const maxStep = 3;
const minLength = 5;
const maxLength = 9;

const getProgression = (start, step, length) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push((step * i) + start);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = getProgression(start, step, length);
  const missedNumberIndex = getRandomNumber(1, length - 1);
  const correctAnswer = String(progression[missedNumberIndex]);
  progression[missedNumberIndex] = '..';

  const question = `${progression.slice(' ').join(' ')}`;

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
