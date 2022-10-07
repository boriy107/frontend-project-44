import readlineSync from 'readline-sync';

export default (rules, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(rules);

  let counter = 0;
  while (counter < 3) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const res = answer === correctAnswer;
    if (res) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
