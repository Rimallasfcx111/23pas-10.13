'use strict';
console.log('strigConcat.js');


// let a = '1';
// let b = '2';
// let c = '3';
// let d = '4';

// let bendraString = `${a}, ${b}, ${c}, ${d}`;
// console.log('bendraString ===', bendraString);

// let poZingsni = '';
// poZingsni = poZingsni + `${a}, `;
// poZingsni = poZingsni + `${b}, `;
// poZingsni = poZingsni + `${c}, `;
// poZingsni += `${d}.`;

// console.log('poZingsni ===', poZingsni);

// let num1 = 5;

// num1 = num1 + 5;
// num1 += 5;

// console.log('num1 ===', num1);

// baigtas

// 9. Surasyti i kintamaji myString visus skaicius nuo -10 iki 35 atskirtus kableliu ir tarpu pvz, -10, -9, -8, ....

// 10. Sudeti skaicius nuo 10 iki 20.

// sudedant atspausdinti kievieno zingsnio informacija pvz "Ciklo numeris 1, prie 0 pridedu 10 ir gaunu 10" pvz "Ciklo numeris 2, prie 10 pridedu 11 ir gaunu 21" pvz "Ciklo numeris 3, prie 21 pridedu 12 ir gaunu 33" ....
// atspausdinti galutini rezultata

let totalSk10 = 0;
let seka = 0;
for (let i = 10; i <= 20; i++) {
  seka++;
  console.log(`Ciklo numeris ${seka}, prie ${totalSk10} pridedu ${i} ir gaunu ${totalSk10 + i}`);
  // totalSk10 = totalSk10 + i;
  totalSk10 += i;
}
console.log('totalSk10 ===', totalSk10);


