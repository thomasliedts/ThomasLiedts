import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProjetsComponent } from "./pages/projets/projets.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  },
  {
    path: "projet",
    component: ProjetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
