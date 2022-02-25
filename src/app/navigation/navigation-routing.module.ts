import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { CreateDessinComponent } from './create-dessin/create-dessin.component';
import { DessinsComponent } from './dessins/dessins.component';
import { SaveDessinComponent } from './save-dessin/save-dessin.component';

const routes: Routes = [
  { path : "" , redirectTo: "Dessins" , pathMatch: "full"},
  { path : "Dessins" , component : DessinsComponent ,children : [
      { path : "Create" , component: CreateDessinComponent},
      { path : "Save" , component: SaveDessinComponent},
      { path : "" , redirectTo: "Create" , pathMatch: "full"},
      { path : "**" , redirectTo: "Create" , pathMatch: "full"}
  ]},
  { path : "Actions" , component: ActionsComponent},
  { path : "**" , redirectTo: "Dessins" , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
