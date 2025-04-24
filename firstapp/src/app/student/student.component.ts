import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'json-read-example';
  studentData:any;
  url: string = '/assets/student.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.studentData = res;
    });
  }
}
