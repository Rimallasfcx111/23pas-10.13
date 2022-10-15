'use strict';
console.log('uzduotys.js');

// 1. atspausdinti skaicius nuo 14 iki 35
// for (let i = 14; i <= 35; i++)
// console.log(i);
// 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
// for (let i = 0; i <= 100; i++){
// console.log(i);
// i += 3;
// }neteisingas
// teisingas
// for (let i = 0; i < 100; i += 3) {
//   console.log(i);
// }

// 3.  atspausdinti skaicius nuo 50 iki 24
// for (let i =50; i >= 24; i--){
//     console.log(` ${i}`);
// }

// 4.  atspausdinti 15 random verciu nuo 1 iki 10 4.1 atspausdinti verciu vidurki
let total = 0;
for (let i = 0; i < 15; i++) {
  let rand = Math.trunc(Math.random() * 10) +1;
   console.log(i, 'rand ==>', rand);
  total = total + rand;
}
console.log('total ===', total);

//  5. atspausdinti nuo 47 iki 68 visus lyginius skaicius

//  6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata

// 7.  sugeneruoti stringa kuris turetu tokia struktura: