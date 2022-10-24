import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const findGcd = (x, y) => ((y !== 0) ? findGcd(y, x % y) : x);

const getRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);

  const question = `${number1} ${number2}`;

  const correctAnswer = String(findGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
