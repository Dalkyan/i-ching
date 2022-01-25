import { Component } from '@angular/core';

@Component({
  selector: 'i-ching-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

  changeBar: boolean[];
  constructor() {
    this.changeBar = [true, true, true , true, true, true];
  }

}
