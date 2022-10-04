import readlineSync from 'readline-sync';

export const run = (rules, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(rules);

  let counter = 0;

  while (counter < 3) {
    if (game(userName) === true) {
      counter += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export const checkAnswer = (answer, correctAnswer, userName) => {
  const res = answer === correctAnswer;
  if (res) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }

  return res;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const askAnswer = () => readlineSync.question('Your answer: ');
