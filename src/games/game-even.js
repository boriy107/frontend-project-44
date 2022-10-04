import {
  run, checkAnswer, askQuestion, askAnswer,
} from '../index.js';
import { randomNumber } from '../helpers.js';

const rules = "Answer 'yes' if number even otherwise answer 'no'.";

const game = (userName) => {
  const currentNumber = randomNumber(1, 50);

  askQuestion(currentNumber);

  let correctAnswer = 'no';
  if (currentNumber % 2 === 0) {
    correctAnswer = 'yes';
  }

  const answer = askAnswer();

  return checkAnswer(answer, correctAnswer, userName);
};

export default () => {
  run(rules, game);
};
