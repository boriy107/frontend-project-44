import { randomNumber } from '../helpers.js';
import run from '../index.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getRound = () => {
  const currentNumber = randomNumber(2, 100);

  let correctAnswer = 'yes';
  for (let i = 2; i < currentNumber; i += 1) {
    if (currentNumber % i === 0) {
      correctAnswer = 'no';
    }
  }

  return [currentNumber, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
