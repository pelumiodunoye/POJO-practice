/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  // Your code here
  const keys = [];

  for (let key in obj) {
    keys.push(key);
  }

  return keys;
}

function keysInObject2(obj) {
  // Your code here
  return Object.keys(obj);
}

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'};
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'};
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
console.log(keysInObject2(foods)); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
