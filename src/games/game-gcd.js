import { randomNumber } from '../helpers.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const game = () => {
  let x = randomNumber(1, 100);
  let y = randomNumber(1, 100);

  const question = `${x} ${y}`;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  let correctAnswer = x;
  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};
