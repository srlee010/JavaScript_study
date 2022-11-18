//1. Use strict
// added in ES 5
// use this for Vanila JavaScript.
'use strict';

//2. Variable (변수: 변경될 수 있는 값)
//let 을 이용함 (added in ES6)

let name = 'Sora';
console.log(name);


//2-1) Block Scope
{
  let name = 'Sora';
  console.log(name);
  name = 'hello';
  console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
{
  age = 4;
  var age;
  // 변수를 먼저 선언하기 전에 값을 할당하는 것은 안좋음! 사용하지말기
}

//3. Constant
// favor immutable data type always for a few reasons:
//   1.Security
//   2.thread safety
//   3.reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

//4. Variable types
// 4-1) primitive(single item): number, string, boolean, null, undefined, symbol
// 4-2) Object : box container
// 4-3) Function: First-class funciton

const count = 17; // integer (정수)
const size = 17.1; //decimal number (소수))
console.log(`value: $(count), type: ${typeof count}`);
console.log(`value: $(size), type: ${typeof size}`);

//number: spcial numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(Infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
console.log(`value: ${greeting}, type: ${typeof gretting}`);
const helloBob = `hi ${brenden}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN. ''
//true: any other value
const canRead = true; // 이렇게 직접 true라고 값을 할당해도 됨
const test = 3 < 1; // false
const real = 1 > 0; // true

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}. type: ${typeof test}`);
console.log(`value: ${real}, type: ${typeof real}`);


// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined; // let x; 이렇게 작성해도 undefined 상태임
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifier for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// object, real-life object, data structure
const sora = {name: 'sora', age: 20};
console.log(sora);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h가 출력됨  0,1,2,3,4순으로 시작됨
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
//문자열에 + 더하기가 있으면 string+string 으로 생각해 string으로 출력됨
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// string과 string을 나눴네? 실제 string에 들어간 값은 숫자자나? 그럼 number로 출력됨
console.log(text.charAt(0));
//마지막에 다른 개발자가 갑자기 number type으로 변경하면 console에서 오류뜸


