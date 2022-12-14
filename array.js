'use strict';

// Array๐

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['๐','๐'];
console.log(fruits);
// ๋ฐฐ์ด์ index๋ฅผ ์ ๋ฌํ๋ฉด ๊ทธ index์ ํด๋นํ๋ ๊ฐ์ ๋ฐ์ ์ ์์. ๊ทธ ๋ฐ์ ์๋ index๋ฅผ ์ ๋ฌํ๋ฉด undefined ๋์ด
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits.length - 1); 
// ์ ์ผ ๋ง์ง๋ง ๊ฐ์ ์๊ณ ์ถ๋ค๋ฉด? '์ด๊ธธ์ด์์ - 1'์ ํ๋ฉด ์ ์ผ ๋ง์ง๋ง index๋ฅผ ๋ฐ์์ฌ ์ ์์!


// 3. Looping over an array
// ๋ฐฐ์ด์์ ๋ค์ด์๋ ์ ์ฒด ๋ฐ์ดํฐ๋ฅผ ๋น๊ธ๋๋ฉด์ ์ถ๋ ฅํด๋ณด๊ธฐ
// print all fruits
// 3-1) for loop
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 3-2) for of
for (let fruit of fruits){
  console.log(fruit);
}

// 3-3) forEach
//๋ฐฐ์ด์์ ๋ค์ด์๋ value๋ค๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํจ!
fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});

// [๋ณต์ต] ํจ์ํ์๋ ์๋์ฒ๋ผ ๊ฐ๋จํ๊ฒ arrow์ด์ฉํด์ ์ ์ธ ๊ฐ๋ฅ! ํ์ค๋ง ์๋ ๊ฒฝ์ฐ {} & ; ์๋ต๊ฐ๋ฅใใ 
fruits.forEach((fruit, index) => console.log(fruit, index));


// 4. Addition, deletion, copy
// API 'push' : add an item to the 'end' 
fruits.push('๐','๐');
console.log(fruits);

// API 'pop' :remove an item from the 'end'
fruits.pop();
console.log(fruits);

// unshift: add an item to the 'beginning'
fruits.unshift('๐','๐');
console.log(fruits); 

// shift: remove an item from the 'beginning'
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift& unshift are slower than pop & push
// splice: remove an item by index postition 
fruits.push('๐','๐');
console.log(fruits);
// fruits.splice(1, 2);
// console.log(fruits);
fruits.splice(1, 2, '๐', '๐');
console.log(fruits); 

// combine two arrays
const fruits2 = ['๐', '๐ฅฅ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐ฅ'));   // ๋ฐฐ์ด์์ ํด๋น๊ฐ์ด ์์ผ๋ฉด -1์ถ๋ ฅ๋จ
console.log(fruits.includes('๐'));  // ๋ฐฐ์ด์ ํด๋น๊ฐ์ด ์๋์ง ์๋์ง ํ์ธ๊ฐ๋ฅ

console.clear();
// lastIndexof
// ๋ง์ฝ ๋ฐฐ์ด์์ ๋๊ฐ์ ๊ฐ(์ฌ๊ณผ)๊ฐ ํ๋ ๋ ์๋ค๋ฉด ?
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐'));   // ์ถ๋ ฅ: 0 -> indexOf๋ ์ฒซ๋ฒ์งธ๋ก ๋ง๋ index๊ฐ์ ๋ฆฌํดํจ
console.log(fruits.lastIndexOf('๐')); // ์ถ๋ ฅ: 5 -> lastIndexOf๋ ์ ์ผ ๋ง์ง๋ง์ ์๋ index๊ฐ์ ๋ฆฌํดํจ

