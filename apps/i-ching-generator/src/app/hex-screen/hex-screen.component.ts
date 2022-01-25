import { Component, OnInit } from '@angular/core';
import { Bar } from '../bar';
import { IChingDivinationLogicService } from '../i-ching-divination-logic.service';


@Component({
  selector: 'i-ching-hex-screen',
  templateUrl: './hex-screen.component.html',
  styleUrls: ['./hex-screen.component.scss']
})
export class HexScreenComponent implements OnInit {

  bars : Bar[] ;

  constructor(private logic:IChingDivinationLogicService) {
    this.bars = new Array<Bar>(6);
  }



  ngOnInit(): void {

    for (let i = 0; i < this.bars.length; i++) {
      const yinYangValue = this.logic.getYinYangValue();
      this.bars[i] = new Bar(yinYangValue > 2, yinYangValue % 2 == 0, i)
    }

  }

  getBarValue
  (): number{
    return this.logic.getYinYangValue();
  }

}
