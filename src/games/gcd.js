import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcdResult = (a, b) => {
  let x = a;
  let y = b;
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const getRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const question = `${a} ${b}`;

  const correctAnswer = String(getGcdResult(a, b));

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
