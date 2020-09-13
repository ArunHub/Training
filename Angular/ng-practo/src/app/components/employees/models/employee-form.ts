
import { FormBuilder, Validators } from '@angular/forms';

export class EmployeeForm{

  constructor() {
    
  }

  employeeForm = new FormBuilder().group({
    username: ['', Validators.required],
    role: ['', Validators.required]
  });
}