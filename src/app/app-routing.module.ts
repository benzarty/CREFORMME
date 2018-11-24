import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
import {ServiceadminComponent} from './Serviceadmin/serviceadmin.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
      path: 'Serviceadmin', component: ServiceadminComponent
    }, {
      path: '',
      component: HomeComponent
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
