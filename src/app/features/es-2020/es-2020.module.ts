import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es2020RoutingModule } from './es-2020-routing.module';
import { ConditionImportComponent } from './components/condition-import/condition-import.component';


@NgModule({
  declarations: [ConditionImportComponent],
  imports: [
    CommonModule,
    Es2020RoutingModule
  ]
})
export class Es2020Module { }
