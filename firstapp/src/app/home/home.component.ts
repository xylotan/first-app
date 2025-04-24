import { Component } from '@angular/core';
import { Employee } from '../../Models/Employee';
import { CommonModule } from '@angular/common';
import {  CustomPipecity,CustomPipesalary } from "../../Pipes/CustomPipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
e:Employee;
emps:Employee[];
searchcity:string;
searchsalary:number;

onInit()
{
  this.poplulateEmployees();
}

constructor()
{
  this.poplulateEmployees();
 // this.e={eid:101,
    // ename:'abc',
    // salary:90000,
    // doj:new Date(4,5,2020),
    // city:'Chennai',
    // emptype:true};
}
poplulateEmployees()
{
this.emps=[{eid:101,ename:'abc',salary:90000,doj:new Date(4,5,2020),city:'chennai',emptype:true},
  {eid:102,ename:'def',salary:60000,doj:new Date(4,8,2022),city:'mumbai',emptype:false},
  {eid:103,ename:'xyz',salary:40000,doj:new Date(4,5,2021),city:'chennai',emptype:true},
  {eid:104,ename:'bbb',salary:10000,doj:new Date(4,5,2024),city:'mumbai',emptype:true},
  {eid:105,ename:'ddd',salary:50000,doj:new Date(4,5,2014),city:'chandigarh',emptype:false},
  {eid:106,ename:'iii',salary:60000,doj:new Date(4,5,2012),city:'pune',emptype:true},
  {eid:107,ename:'wdx',salary:20000,doj:new Date(4,5,2019),city:'pune',emptype:false},
]
}


}