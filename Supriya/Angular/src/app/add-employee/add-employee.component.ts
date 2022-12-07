import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  @Output() addEmployee = new EventEmitter<{
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: Date;
  }>();
  onSubmitClick(
    code: any,
    name: string,
    gender: string,
    salary: any,
    dob: any
  ) {
    if (code && name && gender && salary && dob) {
      this.addEmployee.emit({
        code,
        name,
        gender,
        salary,
        dob,
      });
    } else {
      alert('please enter the data');
    }
  }
  genderName: any;
}
