import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceadminComponent } from './Serviceadmin/serviceadmin.component';
import { HomeComponent } from './home/home.component';
import { ListerFormateurComponent } from './dash-board/formateur/lister-formateur/lister-formateur.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AjouterFormateurComponent } from './dash-board/formateur/ajouter-formateur/ajouter-formateur.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiceadminComponent,
    HomeComponent,
    ListerFormateurComponent,
    DashBoardComponent,
    AjouterFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
