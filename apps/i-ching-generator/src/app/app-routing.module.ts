import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickableHexScreenComponent } from './clickable-hex-screen/clickable-hex-screen.component';
import { HexScreenComponent } from './hex-screen/hex-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'generated-hex', component: HexScreenComponent },
  { path: 'clickable-hex', component: ClickableHexScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
