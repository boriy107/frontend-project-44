import {
  run, checkAnswer, askQuestion, askAnswer, randomNumber,
} from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = (userName) => {
  const currentNumber = randomNumber(2, 99);

  askQuestion(currentNumber);

  let correctAnswer = 'yes';
  for (let i = 2; i < currentNumber; i += 1) {
    if (currentNumber % i === 0) {
      correctAnswer = 'no';
    }
  }

  const answer = askAnswer();

  return checkAnswer(answer, correctAnswer, userName);
};

export default () => {
  run(rules, game);
};