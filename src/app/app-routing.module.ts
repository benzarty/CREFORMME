import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {ServiceadminComponent} from './Serviceadmin/serviceadmin.component';
import {HomeComponent} from './home/home.component';

import {DashBoardComponent} from './dash-board/dash-board.component';
import {ListerFormateurComponent} from './dash-board/formateur/lister-formateur/lister-formateur.component';
import {AjouterFormateurComponent} from './dash-board/formateur/ajouter-formateur/ajouter-formateur.component';


const routes: Routes = [
    {
      path: 'Serviceadmin', component: ServiceadminComponent
    }, {
      path: '',
      component: HomeComponent
    },
  {
   path: 'dashboard', component: DashBoardComponent, children: [{
     path: 'formateur/lister', component: ListerFormateurComponent
    },{
     path: 'formateur/ajouter', component: AjouterFormateurComponent
    }]
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
