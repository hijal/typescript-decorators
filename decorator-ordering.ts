function Order_1(order: string) {
  console.log(order.toUpperCase() + ' execution');
  return function (_: Function) {
    console.log(order + ' Decorator...');
  };
}

function Order_2(order: string) {
  console.log(order.toUpperCase() + ' execution');
  return function (_: Function) {
    console.log(order + ' Decorator...');
  };
}

@Order_1('order_1')
@Order_2('order_2')
class DecoratorOrder {
  constructor() {
    console.log('Creating object...');
  }
}

const order = new DecoratorOrder();
console.log(order);
