import { getRandomNumber, getRandomIndex } from '../helpers.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 50;
const minStep = 1;
const maxStep = 3;
const minLength = 5;
const maxLength = 9;

const createProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push((step * i) + start);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = createProgression(start, step, length);
  const missedNumberIndex = getRandomIndex(progression);
  const correctAnswer = String(progression[missedNumberIndex]);
  progression[missedNumberIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
