// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`string literals: 
4 * 3 = ${4 * 3}`);
console.log('sora\'s book');       // (')를 출력하고 싶으면 백슬래시(\) 이용하기
console.log('sora\'s \nTIL blog');    // 줄바꿈하고 싶으면 \n
console.log('sora\'s \tTIL blog');    // Tab키는 \t 

// 2. Numeric operators
console.log(1 + 1);   // add
console.log(1 - 1);   // substract
console.log(1 / 1);   // divde
console.log(1 * 1);   // multiply
console.log(5 % 2);   // remainder (나머지값))
console.log(2 ** 3);  // exponentiation(거듭제곱)


// 3.Increment and decrement operators
let counter = 2; 
const preIncrement = ++counter;   
// counter라는 변수 앞에 ++ 를 붙이면 preIncrement가 되는데 이것은 아래 코드와 동일하다
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


// 4. Assignemnt operators
let x = 3;
let y = 6;
x += y;  // x = x + y; 
x -= y;  // x = x - y;
x *= y;  // x = x * y;
x /= y;  // x = x / y;


// 5. Comparison operators
console.log(10 < 6);    // less than 
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal


// 6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('😵');
  }
  return true;
}

// || (or). finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// oftern used to compress long if-statement
// nullableObject && nullableObject.something

// ! (not) 값을 반대로 바꿔준다
console.log(!value1);


// 7. Equality
// == loose equality, with type conversion  
// 2개 equal sign 은 loose equality라 부르는데 타입을 변경해서 검사를 하기 때문
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive);    // True
console.log(stringFive != numberFive);    // False

// === strict equality, no type conversion
// type이 다르면 넌 다른 애들이라고 검사해줌
// 코드를 검사할 때 strict eqaulity로 검사하는게 더 좋다 
console.log(stringFive === numberFive);   // False
console.log(stringFive !== numberFive);   // True

// object equalty by reference
const sora1 = { name: 'sora' };
const sora2 = { name: 'sora' }; 
const sora3 = sora1;
console.log(sora1 == sora2);    // False
console.log(sora1 === sora2);   // False
console.log(sora1 === sora3);   // True

// equality - puzzler
// 0, null, undefined, empty string은 false로 간주됨
console.log(0 == false);    // True
console.log(0 === false);   // 0은 boolean type이 아니어서 ===를 이용하면 False
console.log('' == false);   // empty 문자열 False니까 출력값은 True 
console.log('' === false);   // empty 문자열은 boolean type 아니어서 ===이용하면 False
console.log(null == undefined);   // null 과 undefined은 같은것으로 간주 True
console.log(null === undefined);    // null 과 undifined은 서로 다른 type이라 False


// 8. If operators
// if, else if, else
const name = 'sora';
if (name === 'sora') {
  console.log('Welcome, Sora!');
} else if (name === 'coder') {
  console.log('you are an amazing coder.')
} else {
  console.log('unknown');
}


// 9. Ternary operators: ? 
// condition ? value 1 : value2; (간단할때만 사용하기)
// statement가 True인가(?) 맞다면 yes, 아니라면(:) no를 출력해 
console.log(name === 'sora' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'chrome'
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('Love you!');
    break;
  default:
    console.log('same all!');
    break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}


// do while loop, body code is executed first,
// then check the condition.
// 블럭을 실행한 다음 조건이 맞는지 검사함 i 가 0
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop
// for(begin; condition; step)
// 시작하는 문장, condition은 중간에, 마지막으로 어떤 스텝을 밟아나갈건지 명시하기
for (i = 3; i > 0; i--) {
  console.log(`for ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
// while이나 For는 서로 nesting해서 작성할 수 있다
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i ${i}, j:${j}`);
  }
}


// break, continue
// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let a = 0; i < 11; a++) {
  if (a % 2 === 0) {
    continue;
  }
    console.log(`q1. ${a}`);
} 

// 02. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
