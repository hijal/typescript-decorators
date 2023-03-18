function RenderTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    OriginalConstructor: T
  ) {
    return class extends OriginalConstructor {
      constructor(..._: any[]) {
        super();
        const element = document.getElementById(hookId)! as HTMLElement;
        element.innerHTML = template;
        const t = new OriginalConstructor();
        document.querySelector('h1')!.textContent = t.name;
      }
    };
  };
}

@RenderTemplate('<h1>Hello Typescript</h1>', 'app')
class ChainingClsDecorator {
  name = 'Typescript';

  constructor() {
    console.log('Creating person object...');
  }
}

const chainingClsDecorator = new ChainingClsDecorator();

// console.log(chainingClsDecorator);
