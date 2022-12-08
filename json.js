// JSON
// JavaScript Objet Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); 

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object를 JSON으로 바꿔보기
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(), 
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 프로퍼티만 정의하고 싶다면?
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); 

// 2. JSON to Object
// parse(json) : JSON을 Object로 변환하게 함

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); 해당 함수를 써도 오류가 나는 이유? -> rabbit이라는 object를 JSON으로 변환할때 jump함수가 포함되어있지 않고 data만 변환됨 그래서 오류가 남

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
