function Log(target: any, name: string | symbol) {
  console.log(target);
  console.log(name);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator...');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator...');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, methodName: string, position: number) {
  console.log('parameter Decorator...');
  console.log(target);
  console.log(methodName);
  console.log(position);
}

class Product {
  @Log
  category = 'category';
  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      this._price = 1;
    }
  }

  get price() {
    return this._price;
  }

  constructor(public title: string, private _price: number) {}
  @Log3
  gerPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
