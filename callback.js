'use strict';

// JavaScript is synchronous (동기식: 순서대로 실행)
// Execute the code block by order after hoisting. (순서대로 코드실행)
// hoisting: var, function declaration (함수 선언이 제일 위로 올라가는 것) 
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// setTimeout지정한 시간이 지나면 우리가 전달한 콜백함수를 호출하는 API 
// 콜백함수? 우리가 전달한 함수를 나중에 호출해줘

// Asynchronous (언제 코드가 실행되는지 예측할 수 없는 걸 의미)
// 콜백은 항상 비동기일때만 쓰일까? no! 콜백함수도 2가지로 나뉨

// 1. 동기 콜백: Synchronous callbalck 즉각적으로 동기적으로 실행되는 콜백함수 
function printImmediately(print) {
  print();
}
// 함수의 선언은 hoisting 되어서 제일 위로 올라가 출력된다 


printImmediately(() => console.log('hello'));
// 2. 비동기 콜백: Asynchronous callback 나중에 언제 실행될지 예측할수 없는 콜백함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
