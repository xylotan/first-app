import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {EmplistComponent} from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { HomeComponent } from './home/home.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path : 'login',component:SecondComponent},
  {path:'register',component:FirstComponent},
  {path:'emplist',component:EmplistComponent},
  {path:"empadd",component:EmpaddComponent},
  {path:"home",component:HomeComponent},
  {path:"form",component:ReactiveformComponent},
  {path:"json",component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
