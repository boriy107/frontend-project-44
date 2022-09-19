import {
  run, checkAnswer, askQuestion, askAnswer, randomNumber,
} from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = (userName) => {
  const currentNumber = randomNumber();

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
