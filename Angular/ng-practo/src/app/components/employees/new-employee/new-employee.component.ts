import { Component, OnInit } from '@angular/core';
import { EmployeeForm } from '../models/employee-form';
import { DialogService } from '../services/dialog.service';
import { CanComponentDeactivate } from '../services/candeactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit, CanComponentDeactivate {

  constructor(public _dialogService: DialogService) { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    
    return this._dialogService.confirm('Discard changes?');
  }

  form: EmployeeForm = new EmployeeForm();

}
