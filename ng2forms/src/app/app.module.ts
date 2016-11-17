import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleformComponent } from './simpleform/simpleform.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { FormvalidationsComponent } from './formvalidations/formvalidations.component';

@NgModule({
  declarations: [
    AppComponent,
    // Declare the three components as part of the root NgModule
    SimpleformComponent,
    ComplexformComponent,
    FormvalidationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
