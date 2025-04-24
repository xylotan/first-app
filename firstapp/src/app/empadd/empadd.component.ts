import { Component } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {
  e:Employee;

  constructor(private empservice:EmployeeService){
    this.e={eid:0,ename:"",salary:0,doj:new Date(),city:"",emptype:false};
  }

  Addemp(e1:Employee):void{
    this.empservice.emps.push(this.e);
    console.log(this.e);
  }
}
