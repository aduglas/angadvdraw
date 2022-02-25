import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFichierComponent } from './liste-fichier/liste-fichier.component';
import { ErrorRoutageComponent } from './error-routage/error-routage.component';
import { AdminComponent } from './admin/admin.component';
import { IUser, UserService } from '.';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { OverviewUserComponent } from './overview-user/overview-user.component';
import { NotificationWComponent } from './notification-w/notification-w.component';
import { ZoneDessinComponent } from './zone-dessin/zone-dessin.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from "./store/formegeo.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    ListeFichierComponent,
    ErrorRoutageComponent,
    AdminComponent,
    ListeUserComponent,
    OverviewUserComponent,
    NotificationWComponent,
    ZoneDessinComponent
  ],
  imports: [
    CommonModule,
    //StoreModule.forFeature("formegeo", reducer)
    StoreModule.forRoot({ app : reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports:[
    ListeUserComponent,
    NotificationWComponent,
    ZoneDessinComponent
  ],
  providers: []
})
export class DrawModule { }
