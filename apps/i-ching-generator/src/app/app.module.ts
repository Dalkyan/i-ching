import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeScreenComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
