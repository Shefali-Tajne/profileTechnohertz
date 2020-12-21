import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
   BrowserModule, 
   IonicModule.forRoot(), 
   AppRoutingModule, 
   BrowserAnimationsModule,
   FormsModule,
   ReactiveFormsModule,
   MaterialModule,
   RouterModule,
   
],
  providers: [
    StatusBar,
    SplashScreen,
    FormBuilder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
