import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage'

import { environment } from '../environments/environment';
import { SendEmailComponent } from '@auth/send-email/send-email.component';
import { AuthService } from '@auth/services/auth.service';

import { CanEditGuard } from '@auth/guards/can-edit.guard';
import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from '@auth/guards/can-suscriptor.guard';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  providers: [
    AuthService, 
    CanEditGuard, 
    CanAdminGuard, 
    CanSuscriptorGuard,
    {provide: BUCKET, useValue: 'gs://inmobiliaria-400fb.appspot.com'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
