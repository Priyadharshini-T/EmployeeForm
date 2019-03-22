import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http ,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url ="http://localhost/EmpWebApi/api";
  constructor(private http:Http) { }
  getEmployee(): Observable<Response> {
    return this.http.get(this.url+'/values')
     
    };
}
