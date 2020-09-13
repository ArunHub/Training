import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(val: RegExp): ValidatorFn{
    return (control: AbstractControl): {[key:string]: any} | null => {
      const forbidden = val.test(control.value);
      return forbidden ? {'forbidden': {value: control.value}} :null;
    }
  }