import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';



// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCvHyUaMti1oPMxRguU7WmsYk-xSPDA6UA',
  authDomain: 'businesscontacts-c7766.firebaseapp.com',
  databaseURL: 'https://businesscontacts-c7766.firebaseio.com',
  storageBucket: 'businesscontacts-c7766.appspot.com',
  messagingSenderId: '31018125307'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
