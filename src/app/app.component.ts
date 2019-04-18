import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anonymous-uni';
  //mobile = false;
  
  ngOnInit(){
  //  if (window.screen.width > 360) { // 768px portrait
  //    this.mobile = true;
  //  }
  }
  
}
