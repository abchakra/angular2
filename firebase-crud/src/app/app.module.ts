import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


import { AF } from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCZEtMu6PNj1SAPTV3lXHG47I0TRiV-eE8',
  authDomain: 'fir-crud-18f4a.firebaseapp.com',
  databaseURL: 'https://fir-crud-18f4a.firebaseio.com',
  storageBucket: 'fir-crud-18f4a.appspot.com',
  messagingSenderId: '679814631326'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
