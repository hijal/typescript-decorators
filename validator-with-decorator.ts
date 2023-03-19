interface ValidatorConfig {
  [key: string]: {
    [validatorProps: string]: string[];
  };
}

const registerValidator: ValidatorConfig = {};

function required(target: any, propName: string) {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propName]: [
      ...(registerValidator[target.constructor.name]?.[propName] ?? []),
      'required',
    ],
  };
}

function positiveNumber(target: any, propName: string) {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propName]: [
      ...(registerValidator[target.constructor.name]?.[propName] ?? []),
      'positive',
    ],
  };
}

/**
 * output:
 * registerValidator
 * Course {price: ['positive'],title: ['required']}
 */

function validate(obj: any) {
  const objValidatorConfig = registerValidator[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @required
  title: string;
  @positiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = (document.getElementById('title')! as HTMLInputElement).value;
  const price = +(document.getElementById('price')! as HTMLInputElement).value;
  const course = new Course(title, price);

  if (!validate(course)) {
    alert('Invalid input');
    return;
  }
  console.log(course);
});
