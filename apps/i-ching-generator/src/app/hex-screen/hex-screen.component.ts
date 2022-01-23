import { Component, OnInit } from '@angular/core';
import { IChingDivinationLogicService } from '../i-ching-divination-logic.service';


@Component({
  selector: 'i-ching-hex-screen',
  templateUrl: './hex-screen.component.html',
  styleUrls: ['./hex-screen.component.scss']
})
export class HexScreenComponent implements OnInit {

  constructor(private logic:IChingDivinationLogicService) { }

  ngOnInit(): void {
  }

  getBarValue
  (): number{
    return this.logic.getYinYangValue();
  }

}
