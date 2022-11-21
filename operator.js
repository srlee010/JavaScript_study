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