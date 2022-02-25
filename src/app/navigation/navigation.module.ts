import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { DessinsComponent } from './dessins/dessins.component';
import { ActionsComponent } from './actions/actions.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateDessinComponent } from './create-dessin/create-dessin.component';
import { SaveDessinComponent } from './save-dessin/save-dessin.component';


@NgModule({
  declarations: [
    DessinsComponent,
    ActionsComponent,
    NavBarComponent,
    CreateDessinComponent,
    SaveDessinComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports : [
    NavBarComponent,
    CreateDessinComponent
  ]
})
export class NavigationModule { }
