let human = {
  name: '김상형',
  age: 29,
};
// kim에 human 객체 주소값 복사
let kim = human;
function changeName(h) {
  h.name = '김태희';
}

changeName(human);

console.log('name=' + human.name);
console.log('age= ' + human.age);
