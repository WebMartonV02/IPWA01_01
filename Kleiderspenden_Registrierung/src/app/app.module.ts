import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UbergabeComponent } from './components/nav-items/geschaeftsstelle-übergabe/geschaeftsstelle-ubergabe.component';
import { AbholungCompnent } from './components/nav-items/abholung/abholung.component';
import { BestatigungComponent } from './components/bestatingung/bestatigung.component';
import { BestatigunsModelFactory } from './components/bestatingung/factories/bestatigungs-model.factory';
import { AbholungFormProviderService } from './components/nav-items/abholung/services/abholung-form-provider.service';
import { UbergabeFormProviderService } from './components/nav-items/geschaeftsstelle-übergabe/services/ubergabe-form-provider.service';
import { CommonComponentHandlerService } from './shared/common-component-handler.service';

//Angular-Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    UbergabeComponent,
    AbholungCompnent,
    BestatigungComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [ { provide:'abholungService', useClass: AbholungFormProviderService },
               { provide:'ubergabeService', useClass: UbergabeFormProviderService },
               { provide:'commonComponentHandlerService', useClass: CommonComponentHandlerService },
               BestatigunsModelFactory ],
  bootstrap: [AppComponent]
})
export class AppModule { }
