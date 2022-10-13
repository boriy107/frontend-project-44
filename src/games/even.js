import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (x) => x % 2 === 0;

const getRound = () => {
  const currentNumber = getRandomNumber(1, 50);

  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';

  return [currentNumber, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
