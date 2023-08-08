import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpContactComponent } from './emp-contact/emp-contact.component';
import { EmpDetailRouteComponent } from './emp-detail-route/emp-detail-route.component';
import { EmpOverviewComponent } from './emp-overview/emp-overview.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'emp-list', pathMatch: 'full' },
  { path: 'emp-list', component: EmployeeListComponent },
  { path: 'empdetails', component: EmployeeDetailsComponent },
  { 
    path: 'emp-list/:id', 
    component: EmpDetailRouteComponent,
    children: [
      { path: 'overview', component: EmpOverviewComponent },
      { path: 'contact', component: EmpContactComponent }
    ] 
  },
  { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, EmployeeDetailsComponent,
   EmpDetailRouteComponent, PageNotFoundComponent,
   EmpOverviewComponent, EmpContactComponent];
