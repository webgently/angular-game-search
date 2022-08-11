import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header.component';
import { VideoGameComponent } from './video-game-component/video-game.component';
import { ContactComponent } from './contact-component/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoGameComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
