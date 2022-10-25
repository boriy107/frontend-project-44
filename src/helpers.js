export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomIndex = (data) => getRandomNumber(1, data.length - 1);
