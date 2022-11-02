import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: any;

  constructor(private srv: EmployeeService) { }

  ngOnInit(): void {
    this.srv.getEmployees().subscribe(data => this.employees=data);
  }

}
