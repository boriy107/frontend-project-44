import {
  run, checkAnswer, askQuestion, askAnswer,
} from '../index.js';
import { randomNumber } from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const game = (userName) => {
  let x = randomNumber(1, 100);
  let y = randomNumber(1, 100);

  askQuestion(`${x} ${y}`);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  const correctAnswer = x;

  let answer = askAnswer();
  if (!Number.isNaN(Number(answer))) {
    answer = Number(answer);
  }

  return checkAnswer(answer, correctAnswer, userName);
};

export default () => {
  run(rules, game);
};
