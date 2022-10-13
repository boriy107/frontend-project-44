import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgressionArray = (firstNumber, step, arrLength) => {
  const arrNumbers = [firstNumber];
  for (let i = firstNumber + step; arrNumbers.length < arrLength; i += step) {
    arrNumbers.push(i);
  }
  return arrNumbers;
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 3);
  const arrLength = getRandomNumber(5, 9);
  const progressionArray = getProgressionArray(firstNumber, step, arrLength);
  const missingKey = getRandomNumber(1, arrLength - 1);
  const missingNumber = progressionArray[missingKey];
  progressionArray[missingKey] = '..';

  const question = `${progressionArray.slice(' ').join(' ')}`;

  const correctAnswer = String(missingNumber);

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
