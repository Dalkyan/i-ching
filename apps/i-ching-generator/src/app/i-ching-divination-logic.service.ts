import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IChingDivinationLogicService {


 public getYinYangValue():number {

const arrayYinYang = new Array(16);
//old Yin
arrayYinYang[0]=0;
//yang
for (let i = 1; i < 7; i++) {
  arrayYinYang[i] = 1;
}
//old yang
for (let i = 7; i < 10; i++) {
  arrayYinYang[i] = 2;
}
//yin
for (let i = 10; i < 16; i++) {
  arrayYinYang[i] = 3;
}
return arrayYinYang[Math.floor(Math.random() * 16)];
  }
}
