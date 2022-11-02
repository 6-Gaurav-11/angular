import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  getEmployees(): Observable<any> {
    return this.http.get<IEmployee[]>(this._url);
  }

  constructor(private http: HttpClient) { }
}
