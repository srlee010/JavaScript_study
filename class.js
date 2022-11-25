'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6 최근에 추가됨 
// - syntactical sugar over prototype-based inheritance

// 1. Class와 Object 생성하기 
// 1-1) Class declarations
class Person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
    // methods
    speak() {
      console.log(`${this.name}: hello!`)
    }
}

// 1-2) Object 생성하기
const sora = new Person('sora', 20);  //  object가 생성됨!
console.log(sora.name);
console.log(sora.age);
sora.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
// get을 이용해 값을 return하고, set을 이용해 값을 설정하기 때문에 set은 value를 받아와야함
get age() {
    return this._age;
}

set age(value) {
  // if (value < 0) {
  //   throw Error('나이가 0 이하일 순 없어! 경고얌');
  // }
    this._age = value < 0 ? 0 : value;
} 
}

// 객체지향적으로 봤을 때 사람의 나이가 -1이 되는게 말이안됌, 방어적인 자세로 실수를 줄여주기 위해 get, set 사용 
const user1 = new User('Sally', 'Job', -1); 
console.log(user1.age); 
const user2 = new User('Steve','Yoo', 10);
console.log(user2.age);


// 3. Fields (pulbic, private)
// Too soon ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);



// 5. Inheritance (상속과 다양성)
// a way for one class to extend another class.
class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * thist.height;
  }
}

class Rectangle extends shape {}
class Triangle extends shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea);
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea);


// 5. instacneOf operator
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);
