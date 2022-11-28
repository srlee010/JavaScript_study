// Objects
// one of the JavaScript's data types.
// a collecton of related data and / or functionality.
// Nearly all objects in JavaScript are instances of Ojbect
// object = { key: value };

// 1. Literals and properties (Object 생성 방법 2가지)
const obj1 = {};    // 1) 'object literal' syntax
const obj2 = new Object();    // 2) 'object constructor' syntax (클래스를 이용해서 new 키워드를 가지고 만들 수 있음)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const sora = { name: 'sora', age: 20 };
print(sora);


// With JavaScript magin (dynamically typed language)
// can add properties later 
sora.hasJob = true;
console.log(sora.hasJob);

// can delete properties later
delete sora.hasJob;
console.log(sora.hasJob);

// 2. Computed properties
console.log(sora.name);   // dot을 이용해 데이터 접근이 가능하고
console.log(sora['name']); // 배열에서 데이터를 받아오는 것처럼 접근도 가능
sora['hasJob'] = true;
console.log(sora.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(sora, 'name');
printValue(sora, 'age');

// 3. Property value shorthand
const person1 = { name: 'sora', age: 2 };
const person2 = { name: 'celina', age: 3 };
const perosn3 = { name: 'kim', age: 4 };
// person4 를 만드려면 이 작업을 계속 반복해야하는데...

function makePerson(name, age) {
  return {
    name: name,  // key와 value의 이름이 동일하다면 생략할 수 있다 > name
    age: age // > age만 쓰면됨
  };
}

const person4 = makePerson('sally', 5);
console.log(person4);


// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in sora);
console.log('age' in sora);
console.log('place' in sora);

// 6. for..in VS for..of
// for (key in Obj)
console.clear();
for (key in sora) {
  console.log(key);
} 

// for (value of iterable) 배열과 같은 순차적으로 반복가능한(iterable)아이들을 씀
const array = [1, 2, 3, 4, 5];
// 좋지 않은 방법
for(let i = 0; i < array.length ; i++) {
  console.log(array[i]);
}
// 더 쉽게 할 수 있는 방법
for(value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'sora', age: '20' };
const user2 = user;
user2.name = 'student';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign()
// 작성방법 1
const user4 = {};
Object.assign(user4, user);
// 작성방법 2
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);