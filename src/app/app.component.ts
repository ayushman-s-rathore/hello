import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  constructor(private http: HttpClient){}
  
  fetchContent(){
    this.http.get('http://localhost:8080/helloWorld').subscribe(data=>{
      console.log(data);
    })
  }
}
