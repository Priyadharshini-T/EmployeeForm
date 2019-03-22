import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { HttpModule } from '@angular/http';
import { Employee } from './employee';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path: 'employee/add' ,component : AddEmployeeComponent}
    ]),
      ],
      exports:[RouterModule],
  providers: [HttpClientModule,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
