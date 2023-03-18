function Logger(constructor: Function) {
  console.log(constructor);
}

@Logger
class Person {
  name = 'ts';
  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();

console.log(person);
