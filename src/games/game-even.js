import readlineSync from 'readline-sync';

let userName;

const game = () => {
  const currentNumber = Math.floor(Math.random() * (98 - 1) + 1);

  console.log(`Question: ${currentNumber}`);

  const answer = readlineSync.question('Your answer: ');

  let correctAnswer = 'no';
  if (currentNumber % 2 === 0) {
    correctAnswer = 'yes';
  }

  const res = answer === correctAnswer;
  if (res) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }

  return res;
};

const gameLoop = () => {
  let counter = 0;

  while (counter < 3) {
    const result = game();
    if (result === true) {
      counter += 1;
    } else {
      counter = 0;
    }
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');

  userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  gameLoop();

  console.log(`Congratulations, ${userName}!`);
};
