import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent{
  public employees:any;
  public selectedId:number = 0;

  constructor(private employeeSerive : EmployeeService,private router : Router,private route: ActivatedRoute) { 
    this.employeeSerive.getEmployees().subscribe(data => this.employees = data);
    this.route.params.subscribe((params) => {
      this.selectedId = parseInt(params['id']);
    });
  }
  onSelect(employee:any){
    // this.router.navigate(['/emplist',employee.id]);
    this.router.navigate([employee.id],{relativeTo:this.route});
  }
  isSelected(employee:any){
    return employee.id === this.selectedId;
  }
}
