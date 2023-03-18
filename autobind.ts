function AutoBind(_1: any, _2: string, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const bindFn = originalMethod.bind(this);
      return bindFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  constructor(public name: string) {}
  @AutoBind
  details() {
    console.log('The name is: ' + this.name.toUpperCase());
  }
}

const p = new Printer('epson');
p.details();
const button = document.querySelector('button')!;

button.addEventListener('click', p.details);
