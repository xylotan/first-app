import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {
    
   }
   helloWorld():void{
    console.log("Hello World");
  }
}
