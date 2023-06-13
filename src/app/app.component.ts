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
    this.http.get('/api/v1/hello').subscribe(data=>{
      console.log(data);
    })
  }
}
