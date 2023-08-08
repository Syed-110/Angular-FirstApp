import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent{
  public employees:any;
  constructor(private employeeSerive : EmployeeService) {
    this.employeeSerive.getEmployees().subscribe(data => this.employees = data);
  }
}
