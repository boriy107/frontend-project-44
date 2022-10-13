/* eslint-disable import/prefer-default-export */
/* added exception because of single function */
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
