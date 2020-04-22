import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Es2020PageComponent } from './containers/es-2020-page/es-2020-page.component';


const routes: Routes = [{ path: '', component: Es2020PageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es2020RoutingModule { }
