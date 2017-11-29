import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {
      	"comment", "first comment!";
      	"author", "Quinn";
      },
      {
      	"comment": 'nice work!',
      	"author": "Q"
      },
      {
      	"comment":'I would also like to congratulate you!',
      	"author": "everyone"
      
  ];
}
