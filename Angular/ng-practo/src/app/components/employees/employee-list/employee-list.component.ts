import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];
  constructor(private _employeeService: EmployeeService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe(
      (data: {resEmployee: Employee[]}) => {
        this.employeeList = data.resEmployee;
      },
      err => console.log('error on getting employee', err)
    )
  }

  columnDefs = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'Username', field: 'username' },
    { headerName: 'Role', field: 'role' },
  ];

}
