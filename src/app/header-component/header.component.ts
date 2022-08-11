import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  flag1 = "block";
  flag2 = "hidden";
  constructor() { 
  }
  clickEvent(flag: string) {
    if (flag === "video") {
      this.flag1 = "block";
      this.flag2 = "hidden";
    } else { 
      this.flag1 = "hidden";
      this.flag2 = "block";
    }
    return this.flag1, this.flag2;
  }
  
}
