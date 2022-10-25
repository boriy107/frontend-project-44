import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = -50;
const maxRange = 50;

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  const limit = Math.sqrt(x);
  for (let i = 2; i <= limit; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
