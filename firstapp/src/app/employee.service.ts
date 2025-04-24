import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  e:Employee;
  emps: any[];
 e1: Employee;
  
  constructor() 
  {
  this.emps=[];
  this.e={eid:1,ename:"Ram",salary:30000,doj:new Date("4/3/2025"),city:"Chennai",emptype:false};
  this.e1={eid:2,ename:"Ujjawal",salary:78000,doj:new Date("9/5/2023"),city:"Lucknow",emptype:true,};
  this.emps.push(this.e);
  this.emps.push(this.e1);
  this.emps.push({eid:3,ename:"Tanish",salary:560000,doj:new Date("3/6/2024"),city:"Paris",emptype:true});
  
 
   }
   getEmployees():any{
    return this.emps;
  }
}
