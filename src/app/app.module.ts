import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceadminComponent } from './Serviceadmin/serviceadmin.component';
import { ListerFormateurComponent } from './dash-board/formateur/lister-formateur/lister-formateur.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AjouterFormateurComponent } from './dash-board/formateur/ajouter-formateur/ajouter-formateur.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ModifierFormateurComponent} from './dash-board/formateur/modifier-formateur/modifier-formateur.component';
import { FormationComponent } from './dash-board/formation/ajout-formation/formation.component';
import { ListerFormationComponent } from './dash-board/formation/lister-formation/lister-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceadminComponent,
    ListerFormateurComponent,
    DashBoardComponent,
    AjouterFormateurComponent,
    ModifierFormateurComponent,
    FormationComponent,
    ListerFormationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
