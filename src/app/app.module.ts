import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContrainteNavigationGuard, UserService , IUser, UserFalseService } from './draw';
import { DrawModule } from './draw/draw.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    DrawModule,
    NavigationModule
  ],
  providers: [ {provide: IUser , useClass: UserService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
