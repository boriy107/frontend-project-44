import {
  run, checkAnswer, askQuestion, askAnswer, randomNumber,
} from '../index.js';

const rules = 'What number is missing in the progression?';

const game = (userName) => {
  const firstNumber = randomNumber();
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

  askQuestion(`${arrNumbers.slice(' ').join(' ')}`);

  const correctAnswer = missingNumber;

  let answer = askAnswer();
  if (!Number.isNaN(Number(answer))) {
    answer = Number(answer);
  }

  return checkAnswer(answer, correctAnswer, userName);
};

export default () => {
  run(rules, game);
};
