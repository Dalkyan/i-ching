export class Bar {
  isBroken: boolean;
  isChanging: boolean;
  yPosition: number;

  constructor(isBroken: boolean, isChanging: boolean, index: number){
this.isBroken = isBroken;
this.isChanging = isChanging;
this.yPosition = 145 - index * 20;
  }

toggleIsBroken(){
this.isBroken = !this.isBroken;
}
toggleIsChanging(){
  this.isChanging = !this.isChanging;
  }


}
