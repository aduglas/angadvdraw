import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFichierComponent } from './liste-fichier/liste-fichier.component';
import { ErrorRoutageComponent } from './error-routage/error-routage.component';
import { AdminComponent } from './admin/admin.component';
import { IUser, UserService } from '.';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { OverviewUserComponent } from './overview-user/overview-user.component';



@NgModule({
  declarations: [
    ListeFichierComponent,
    ErrorRoutageComponent,
    AdminComponent,
    ListeUserComponent,
    OverviewUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListeUserComponent
  ],
  providers: []
})
export class DrawModule { }
