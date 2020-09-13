import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator, AbstractControl, ValidatorFn } from '@angular/forms';
import { forbiddenNameValidator } from '../../../shared/directives';

export class LoginForm{

  constructor() {
    
  }

  loginForm = new FormBuilder().group({
    username: ['', [Validators.compose([Validators.required, Validators.maxLength(5)]), forbiddenNameValidator(/bob/i)]],
    password: ['', Validators.required],
    isManager: [false]
  });
}