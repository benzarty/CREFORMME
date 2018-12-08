import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {ServiceadminComponent} from './Serviceadmin/serviceadmin.component';

import {DashBoardComponent} from './dash-board/dash-board.component';
import {ListerFormateurComponent} from './dash-board/formateur/lister-formateur/lister-formateur.component';
import {AjouterFormateurComponent} from './dash-board/formateur/ajouter-formateur/ajouter-formateur.component';
import {ModifierFormateurComponent} from './dash-board/formateur/modifier-formateur/modifier-formateur.component';
import {ListerFormationComponent} from './dash-board/formation/lister-formation/lister-formation.component';
import {FormationComponent} from './dash-board/formation/ajout-formation/formation.component';

const routes: Routes = [
    {
      path: 'dash-board', component: DashBoardComponent
    }, {
      path: '',
      component: ServiceadminComponent
    },
  {
   path: 'dashboard', component: DashBoardComponent, children: [{
     path: 'formateur/lister', component: ListerFormateurComponent
    }, {
     path: 'formateur/ajouter', component: AjouterFormateurComponent
    }, { path: 'formateur/modifier/:id', component: ModifierFormateurComponent
    }, { path: 'formation/lister', component: ListerFormationComponent},
      { path: 'formation/ajouter', component: FormationComponent}



]
  }
  ]
;


@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
