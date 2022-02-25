import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFichierComponent , ErrorRoutageComponent , AdminComponent , ContrainteNavigationGuard} from "./draw";
import { OverviewUserComponent } from './draw/overview-user/overview-user.component';
import { CreateDessinComponent } from './navigation/create-dessin/create-dessin.component';


/*
const routes: Routes = [
  { path : "" , redirectTo:"liste" , pathMatch: "full"},
  { path : "liste" , component: ListeFichierComponent  , canDeactivate:[ContrainteNavigationGuard]},
  { path: "admin" , component: AdminComponent , canActivate:[ContrainteNavigationGuard]},
  { path: "user/:id" , component: OverviewUserComponent },
  { path: "**" , component: ErrorRoutageComponent  }
];
*/
const routes: Routes = [  
  { path : "" , 
    loadChildren: () => import('./navigation/navigation.module').then(
                    m => m.NavigationModule
                    )
  },
  /*
  { path : "rtautre" , component : CreateDessinComponent , outlet:"autreoutlet"}
  */
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
