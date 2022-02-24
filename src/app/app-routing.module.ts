import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFichierComponent , ErrorRoutageComponent , AdminComponent , ContrainteNavigationGuard} from "./draw";
import { OverviewUserComponent } from './draw/overview-user/overview-user.component';


const routes: Routes = [
  //{ path : "" , component: ListeFichierComponent}, 
  { path : "" , redirectTo:"liste" , pathMatch: "full"},
  { path : "liste" , component: ListeFichierComponent  , canDeactivate:[ContrainteNavigationGuard]},
  { path: "admin" , component: AdminComponent , canActivate:[ContrainteNavigationGuard]},
  { path: "user/:id" , component: OverviewUserComponent },
  { path: "**" , component: ErrorRoutageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
