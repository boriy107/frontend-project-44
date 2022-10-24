import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
