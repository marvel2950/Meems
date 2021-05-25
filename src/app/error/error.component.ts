import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  msg_disp = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.msg_disp=true;
      
    }, 2000);
    
  }

}
