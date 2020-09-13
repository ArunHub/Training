import { Component, ElementRef } from "@angular/core";

import {Employee} from "../models/employee";

@Component({
    selector: 'employees-list',
    templateUrl: './employees-list.component.html'
})
export class EmployeesListComponent {
    constructor() {
        // this.employee = new Employee();
        // this.employee.employeeId = 12345;
        // this.employee.employeeName = 'arun'
        // this.employee.address = 'shenoy road, nungambakkam';
        // this.employee.city = 'chennai';
        // this.employee.email = 'chennai@india.com';
        // this.employee.phone = "+123456789";
        // this.employee.platform = 'Javascript'
        // this.employee.avatar = 'noimage.jpg'
    }
    pageTitle: string = "Synechron Employess List";
    subTitle: string = "Core Development";
    selectedEmployee: Employee;
    childMessage: string="";
    onEmployeeSelect(employee: Employee): void {
        this.selectedEmployee = employee;
        console.log(this.selectedEmployee);
    }
    onChildMessageReceived(msg: string): void{
        this.childMessage = msg;
    }
    employees: Employee[]=    [
        {
            employeeName: 'arun',
            employeeId: 456,
            address: 'shenoy road, nungambakkam',
            email: 'arun@syn.com' ,
            phone: '78945613',
            city: 'chennai',
            platform: 'Javascript',
            avatar : 'images/noimage.png'
        },
        {
            employeeName: 'bino',
            employeeId: 789,
            address: 'hoodi',
            email: 'bino@syn.com' ,
            phone: '456789',
            city: 'mahadevpura',
            platform: 'dotnet',
            avatar : 'images/noimage.png'
        },
        {
            employeeName: 'siva',
            employeeId: 123,
            address: 'tirupathi',
            email: 'siva@syn.com' ,
            phone: '123456',
            city: 'andhra',
            platform: 'Angular',
            avatar : 'images/noimage.png'
        },
    ];
}