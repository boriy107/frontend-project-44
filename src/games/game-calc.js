import { randomNumber } from '../helpers.js';

export const rules = 'What is the result of the expression?';

export const game = () => {
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
