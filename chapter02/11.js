function Person(name, gender, age, address, job) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.address = address;
  this.job = job;
}

Person.prototype.printInfo = function () {
  console.log(`${this.name}의 성별은 ${this.gender}이며 ${this.age}세입니다.`);
  console.log(`주소는 ${this.address}이며 직업은 ${this.job}입니다.`);
};

let yura = new Person('yura', 'f', 15, 'sky', 'angel');

yura.printInfo();
