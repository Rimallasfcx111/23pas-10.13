'use strict';
console.log('skaiciai.js');

// 4. atspausdinti 15 random verciu nuo 1 iki 10

// let total = 0;
// for (let i = 0; i < 15; i++) {
// let rand = Math.trunc(Math.random() * 10) + 1;
// console.log(i,'rand ==>', rand);
// total = total + rand;

// }
// console.log('total ===', total);
// let avg = total / 15
// console.log('avg ===', +avg.toFixed(2));
// 5. atspausdinti nuo 47 iki 68 visus lyginius skaicius
// for (let i = 47; i <= 68; i++) {
//     console.log(i);
    
// } dirba
// 6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata
// total = 0
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   total = total + i
//   console.log('total ===', total);
// }
// console.log('TOTAL total ===', total);nedirba

// sukuriam cikla kuris tesiasi 20kartu
// 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.
// for (let i = 2; i <= 12; i++) {
//     console.log(i);
// }
// // 7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?

// 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?

// nespausdinti skaiciau 17
// for (let i = 1; i<= 20; i++) {
//     if (i===4){
//         continue;
//     }
//     if (i===15){
//         continue;
//     }
//     if (i=== 17) {
//         continue;
//     }
//     console.log(i);
    
// }
// nespausdinti 4, 15, 17 padaryta auksciau
// 7. sugeneruoti stringa kuris turetu tokia struktura:
// debugger;
// let myListString = '<ul>';
// for (let i = 4; i <= 6; i++) {
//   let liEl = `<li>${i}</li>`;
//   console.log(liEl);
//   myListString = myListString + liEl;
// }
// // myListString = myListString + '</ul>';
// console.log('myListString ===', myListString);

// 8. Suskaiciuoti kiek skaiciau 4 kartotiniu nuo 0 iki 160
// kaip gauti 4 kartotini ? sk % 4 === 0
// let radauKartotiniu = 0;
// 1 sukti cikla nuo 0 iki 160
// for (let i = 0; i <= 160; i = i + 1) {
//   // 2 ziureti ar skaicius yra 4 kartotinis
//   if (i % 4 === 0) {
//     // 3 jei yra tai priskaiciuoti prie radauKartotiniu
//     // radauKartotiniu = radauKartotiniu + 1;
//     // radauKartotiniu += 1;
//     radauKartotiniu++;
//     console.log(`skaicius ${i} yra 4 kartotinis`);
//   }
// }
// console.log('radauKartotiniu ===', radauKartotiniu);
// 4 pabaiga
// 9 Surasyti i kintamaji myString visus skaicius nuo -10 iki 35
//  atskirtus kableliu ir tarpu pvz, -10, -9, -8, ....
debugger;
let myString ='';
for (let i = -10; i <= 35; i++) {
    console.log(i);
    myString = myString +i;
}
console.log('myString ===', `${ myString}`);