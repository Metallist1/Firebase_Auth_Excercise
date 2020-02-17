import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyBP-h6dFicsI23at4L4E4vm70bX-TJ3Tfo",
  authDomain: "authenticationtest-8b173.firebaseapp.com",
  databaseURL: "https://authenticationtest-8b173.firebaseio.com",
  projectId: "authenticationtest-8b173",
  storageBucket: "authenticationtest-8b173.appspot.com",
  messagingSenderId: "557302842285",
  appId: "1:557302842285:web:d118d0670eb67744d51724",
  measurementId: "G-Z9D1JVP4Y6"
  }

import { AuthGuard } from "./Shared/admin-services/_firebase-services/_guard/firebase.authentication.guard";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin-page/admin-login/admin.component';
import { AdminMainComponent } from './admin-page/admin-main/admin-main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
