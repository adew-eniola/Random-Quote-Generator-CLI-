"use strict";
const prompt = require("prompt-sync")();
console.log("------ Generate a random quote🧙‍♂️ ------");
const randomNum = prompt("Pick a random number between 0 - 9: ");
const quotesArr = [
  "An unexamined life is not worth living.",
  "Life is 10% what happens to you and 90% how you react to it.",
  "If you can dream it, you can do it.",
  "Life begins at the end of your comfort zone.",
  "He who has a why to live can bear almost any how.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "We do not remember days, we remember moments.",
  "The purpose of our lives is to be happy.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Life is 10% what happens to you and 90% how you react to it.",
];

const randomQuote = () => {
  parseInt(randomNum);
  return quotesArr[randomNum];
};

let generateQuote = randomQuote();
console.log(generateQuote);
