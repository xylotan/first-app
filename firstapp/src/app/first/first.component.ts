import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title:string; 
  name:string;
  photo_url:string;
  message:string;

  constructor(){
    this.title="1C"
    this.name="";
    this.photo_url="../assets/download.jfif" //property binding
}

showMessage(msg:string):void{ //event binding
  console.log("Welcome "+msg);
}
}
