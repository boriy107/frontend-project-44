import { randomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';

const getRound = () => {
  const firstNumber = randomNumber(1, 50);
  const step = randomNumber(1, 3);
  const arrLength = randomNumber(5, 9);
  const missingKey = randomNumber(1, arrLength - 1);
  const arrNumbers = [firstNumber];
  let missingNumber = 0;

  for (let i = firstNumber + step; arrNumbers.length < arrLength; i += step) {
    if (missingKey === arrNumbers.length) {
      missingNumber = i;
      arrNumbers.push('..');
    } else {
      arrNumbers.push(i);
    }
  }

  const question = `${arrNumbers.slice(' ').join(' ')}`;

  const correctAnswer = String(missingNumber);

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
