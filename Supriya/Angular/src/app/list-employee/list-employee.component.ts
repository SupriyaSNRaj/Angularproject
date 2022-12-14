import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent {
  @Input() newEmployee: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: string;
  }[] = [];

  employee = 'employeeDet';

  @Input() existingEmployee: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: string;
  }[] = [];
}