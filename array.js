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


