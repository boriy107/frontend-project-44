import readlineSync from 'readline-sync';

export default () => {
    printWelcome();
    let name = askName();
    printHello(name);
}

const printWelcome = () => {
    console.log('Welcome to the Brain Games!');
}

const askName = () => {
    const userName = readlineSync.question('May I have your name? ');
    return userName;
}

const printHello = (name) => {
    console.log('Hello, ' + name + '!');
}