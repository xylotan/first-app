import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { HomeComponent } from './home/home.component';
import { CustomPipecity, CustomPipesalary } from "../Pipes/CustomPipe";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EmplistComponent,
    EmpaddComponent,
    HomeComponent,
    ReactiveformComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipecity,
    CustomPipesalary,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
