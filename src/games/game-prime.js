import { randomNumber } from '../helpers.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const game = () => {
  const currentNumber = randomNumber(2, 100);

  let correctAnswer = 'yes';
  for (let i = 2; i < currentNumber; i += 1) {
    if (currentNumber % i === 0) {
      correctAnswer = 'no';
    }
  }

  return [currentNumber, correctAnswer];
};
