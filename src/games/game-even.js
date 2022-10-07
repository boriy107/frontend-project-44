import { randomNumber } from '../helpers.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const game = () => {
  const currentNumber = randomNumber(1, 50);

  let correctAnswer = 'no';
  if (currentNumber % 2 === 0) {
    correctAnswer = 'yes';
  }

  return [currentNumber, correctAnswer];
};
