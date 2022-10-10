import { randomNumber } from '../helpers.js';
import run from '../index.js';

export const rule = 'What is the result of the expression?';

export const getRound = () => {
  const operationSymbols = ['+', '-', '*'];
  const firstNumber = randomNumber(0, 50);
  const secondNumber = randomNumber(0, 50);
  const randomIndex = randomNumber(0, operationSymbols.length - 1);
  const operationSymbol = operationSymbols[randomIndex];

  const question = `${firstNumber} ${operationSymbol} ${secondNumber}`;

  let correctAnswer;
  if (operationSymbol === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operationSymbol === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  correctAnswer = String(correctAnswer);

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
