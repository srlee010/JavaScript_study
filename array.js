'use strict';

// Array🎉

// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
// 배열은 index를 전달하면 그 index에 해당하는 값을 받을 수 있음. 그 밖에 있는 index를 전달하면 undefined 나옴
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits.length - 1); 
// 제일 마지막 값을 알고싶다면? '총길이에서 - 1'을 하면 제일 마지막 index를 받아올 수 있음!


// 3. Looping over an array
// 배열안에 들어있는 전체 데이터를 빙글돌면서 출력해보기
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
//배열안에 들어있는 value들마다 내가 전달한 함수를 출력함!
fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});

// [복습] 함수표시는 아래처럼 간단하게 arrow이용해서 선언 가능! 한줄만 있는 경우 {} & ; 생략가능ㅎㅎ 
fruits.forEach((fruit, index) => console.log(fruit, index));


// 4. Addition, deletion, copy
// API 'push' : add an item to the 'end' 
fruits.push('🍓','🍑');
console.log(fruits);

// API 'pop' :remove an item from the 'end'
fruits.pop();
console.log(fruits);

// unshift: add an item to the 'beginning'
fruits.unshift('🍓','🍋');
console.log(fruits); 

// shift: remove an item from the 'beginning'
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift& unshift are slower than pop & push
// splice: remove an item by index postition 
fruits.push('🍑','🍋');
console.log(fruits);
// fruits.splice(1, 2);
// console.log(fruits);
fruits.splice(1, 2, '🍏', '🍉');
console.log(fruits); 

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥕'));   // 배열안에 해당값이 없으면 -1출력됨
console.log(fruits.includes('🍓'));  // 배열에 해당값이 있는지 없는지 확인가능

console.clear();
// lastIndexof
// 만약 배열안에 똑같은 값(사과)가 하나 더 있다면 ?
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));   // 출력: 0 -> indexOf는 첫번째로 만난 index값을 리턴함
console.log(fruits.lastIndexOf('🍎')); // 출력: 5 -> lastIndexOf는 제일 마지막에 있는 index값을 리턴함

