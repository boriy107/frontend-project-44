import {
  run, checkAnswer, askQuestion, askAnswer, randomNumber,
} from '../index.js';

const rules = 'What is the result of the expression?';

const game = (userName) => {
  const operationSymbols = ['+', '-', '*'];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const randomIndex = randomNumber(0, operationSymbols.length - 1);
  const operationSymbol = operationSymbols[randomIndex];

  askQuestion(`${firstNumber} ${operationSymbol} ${secondNumber}`);

  let correctAnswer;
  if (operationSymbol === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operationSymbol === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }

  let answer = askAnswer();
  if (!Number.isNaN(Number(answer))) {
    answer = Number(answer);
  }

  return checkAnswer(answer, correctAnswer, userName);
};

export default () => {
  run(rules, game);
};
