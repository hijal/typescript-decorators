function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const element = document.getElementById(hookId)! as HTMLElement;
    element.innerHTML = template;
    const t = new constructor();
    document.querySelector('h1')!.textContent = t.name;
  };
}

@WithTemplate('<h1>Hello Typescript</h1>', 'app')
class Template {
  name = 'Typescript';

  constructor() {
    console.log('Creating person object...');
  }
}

const template = new Template();

console.log(template);
