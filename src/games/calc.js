import { getRandomNumber } from '../helpers.js';
import run from '../index.js';

const rule = 'What is the result of the expression?';

const operatorPlus = '+';
const operatorMinus = '-';
const operatorMultyply = '*';
const operators = [
  operatorPlus,
  operatorMinus,
  operatorMultyply,
];

const getCalcResult = (x, y, operator) => {
  let result = 0;
  if (operator === operatorPlus) {
    result = x + y;
  } else if (operator === operatorMinus) {
    result = x - y;
  } else if (operator === operatorMultyply) {
    result = x * y;
  }
  return result;
};

const getRound = () => {
  const number1 = getRandomNumber(0, 50);
  const number2 = getRandomNumber(0, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  const correctAnswer = String(getCalcResult(number1, number2, operator));

  return [question, correctAnswer];
};

export default () => {
  run(rule, getRound);
};
