import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContrainteNavigationGuard, UserService , IUser, UserFalseService } from './draw';
import { DrawModule } from './draw/draw.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DrawModule
  ],
  providers: [ {provide: IUser , useClass: UserService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
