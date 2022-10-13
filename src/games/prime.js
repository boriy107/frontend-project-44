import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (x) => {
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const currentNumber = getRandomNumber(2, 100);

  const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';

  return [currentNumber, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
