export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getIndex = (arr) => getRandomNumber(1, arr.length - 1);
