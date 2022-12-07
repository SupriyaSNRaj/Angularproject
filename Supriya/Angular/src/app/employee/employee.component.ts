import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  existingEmployeeDetails: any[] = [
    {
      code: 1001,
      name: 'Supriya',
      gender: 'Female',
      salary: 55000,
      dob: '28/06/1999',
    },
    {
      code: 1002,
      name: 'Santosh',
      gender: 'Male',
      salary: 90000,
      dob: '14/03/1989',
    },
    {
      code: 1003,
      name: 'Sneha',
      gender: 'Female',
      salary: 80000,
      dob: '12/01/1993',
    },
  ];

  newEmployeeDetails: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: Date;
  }[] = [];

  employee(employeeInfo: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: Date;
  }) {
    if (employeeInfo.salary > 0) {
      console.log(
        employeeInfo.code +
          ' ' +
          employeeInfo.name +
          ' ' +
          employeeInfo.gender +
          ' ' +
          employeeInfo.salary +
          ' ' +
          employeeInfo.dob
      );
      this.newEmployeeDetails.push(employeeInfo);
    } else {
      alert('salary should be greater than zero');
    }
  }
}
