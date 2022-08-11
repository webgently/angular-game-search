import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGameComponent } from './video-game-component/video-game.component';
import { ContactComponent } from './contact-component/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'video-games', component: VideoGameComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/video-games', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
