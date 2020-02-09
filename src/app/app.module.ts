import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
