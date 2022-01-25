import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexScreenComponent } from './hex-screen/hex-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'generated-hex', component: HexScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
