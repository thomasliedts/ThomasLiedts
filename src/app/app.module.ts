import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './component/components/header/header.component';
import { FooterComponent } from './component/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
