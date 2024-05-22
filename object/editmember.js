let human = {
  name: '김상형',
  age: 29,
};

human.salart = 520;
delete human.age;

console.log(`${human.name}의 월급 : ${human.salary}`);
