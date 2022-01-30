import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-ching-clickable-hex-screen',
  templateUrl: './clickable-hex-screen.component.html',
  styleUrls: ['./clickable-hex-screen.component.scss']
})
export class ClickableHexScreenComponent {

  changeBar: boolean[];
  constructor() {
    this.changeBar = [true, true, true , true, true, true];
  }

}
