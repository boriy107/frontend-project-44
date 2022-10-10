import { randomNumber } from '../helpers.js';
import run from '../index.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getRound = () => {
  const currentNumber = randomNumber(1, 50);

  let correctAnswer = 'no';
  if (currentNumber % 2 === 0) {
    correctAnswer = 'yes';
  }

  return [currentNumber, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
