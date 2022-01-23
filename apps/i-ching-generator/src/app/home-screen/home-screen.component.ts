import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-ching-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  changeBar: boolean[];
  constructor() {
    this.changeBar = [true, true, true , true, true, true];
  }

ngOnInit(): void {
  // for (let i = 0; i < 6; i++) {
  //   this.changeBar[i] = true;
  //   }
}
}
