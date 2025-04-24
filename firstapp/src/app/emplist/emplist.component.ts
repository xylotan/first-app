import { Component } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
//  e:Employee;
//  e1:Employee;
 emps:Employee[];

//dependency injection
 constructor(private empservice:EmployeeService)
 {
  this.emps=this.empservice.getEmployees();
  console.log(this.emps);
 }
 


}
