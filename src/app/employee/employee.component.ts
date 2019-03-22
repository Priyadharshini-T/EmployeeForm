import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = 'EmployeeData';
  employee: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router
  ) {

  }

  redirect() {
    this.router.navigate(['/employee/add']);
  }


  ngOnInit() {
    this.employeeService.getEmployee().subscribe(x => {
      this.employee = x.json();

    })


  }

}
