import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular-Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import { UbergabeComponent } from './components/nav-items/geschaeftsstelle-übergabe/geschaeftsstelle-ubergabe.component';
import { AbholungCompnent } from './components/nav-items/abholung/abholung.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UbergabeComponent,
    AbholungCompnent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,

    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
