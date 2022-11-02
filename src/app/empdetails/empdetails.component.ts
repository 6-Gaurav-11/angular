import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  public employees: any;
  constructor(private srv: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.srv.getEmployees();
  }

}
