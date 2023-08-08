import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getEmployees(){
    return this.http.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || 'Server Error');
  }
}
