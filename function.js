// Function
// 1.fundamental building block in the program 
// 2.subProgram can be used multiple times (재사용 가능))
// 3.performs a task or calculates a value (한 가지의 기능을 하거나 어떤 값을 계산하기 위해 사용))

// 1. Function declaration (함수 사용법)
// function name(param1, param2) { body... return; }
// one function === one thing (하나의 함수는 한 가지의 일만 하도록 만들어야함)
// naming: doSomething, command, verb (함수명은 무언가를 동작하는 거라 동사형태로 이름 지정하기)
// e.g. createCardAndPoint -> createCard, createPoint로 세분화하기 
// function is object is JS

function printHello () {
  console.log('hello');
}
printHello();

// printHello함수는 계속 hello만 출력해서 쓸모가 없음
// 좀 더 유용한 함수를 만드려면? parameter로 메시지를 전달하면 전달된 메시지를 출력할수있게하기

function log(message) {
  console.log(message);
}
log('Hi JavaScript');


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(object) {
  object.name = 'swift';
}
const sora = { name : 'swift'}
const jenny = { name : 'Javascript'}
changeName(sora);
console.log(sora);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi sora');

// 4. Rest parameters (added in ES6)
function printAll(...args){
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('sora', 'javascript', 'typescript');



// 5. Local scope
let globalMessage = 'global';    // global variable
function printMessage() {
  let message = 'hello';
  console.log(message);     // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
}
  // console.log(childMessage); // error
  return undefined; 
printMessage();


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad case
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  }
}

// good case
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
    // long upgrade logic ...
}
