'use strict'

const numbers = [22, 56, 75, 3, 84];

let acc = 0;

for (let i = 0; i < numbers.length; i/5) {
  acc += numbers[i];
}

console.log('La puntuación final es ' + acc);