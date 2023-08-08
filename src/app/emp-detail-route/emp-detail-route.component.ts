import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-detail-route',
  templateUrl: './emp-detail-route.component.html',
  styles: [
  ]
})
export class EmpDetailRouteComponent {
  public employeeId:number = 0;
  constructor(private route: ActivatedRoute,private router:Router) { 
    this.route.params.subscribe((params) => {
      this.employeeId = parseInt(params['id']);
    });
  }
  handlePrevious(){
    let previousId : number = this.employeeId - 1;
    this.router.navigate(['/emp-list',previousId]);
  }
  handleNext(){
    let nextId: number = this.employeeId + 1;
    this.router.navigate(['/emp-list',nextId]);
  }
  handleBack(){
    let selectedId : number = this.employeeId;
    // this.router.navigate(['/emplist',{id : selectedId}]);
    this.router.navigate(['../',{id : selectedId}],{relativeTo:this.route});
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
