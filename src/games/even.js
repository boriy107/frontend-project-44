import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 50;

const isEven = (x) => x % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
