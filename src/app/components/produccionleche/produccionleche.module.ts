
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { produccionLecheComponent }    from './produccionleche.component';
import { ProduccionListComponent }  from './produccion-list.component';
import { ProduccionFormComponent }  from './produccion-form.component';
import { ProduccionFormModal } from './produccion-form.modal';
import { produccionLecheRouting } from '../../core/routes/produccionleche.routing';

import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import {SmartadminModule} from "../../shared/smartadmin.module";

@NgModule({
  imports: [
    SmartadminInputModule,
    SmartadminDatatableModule,
    SmartadminModule,
    CommonModule,
    FormsModule,
    UtilModule,
    produccionLecheRouting
  ],
  declarations: [
    ProduccionListComponent,
    ProduccionFormComponent,
    ProduccionFormModal,
    produccionLecheComponent
  ],
  entryComponents: [ProduccionFormModal]
})
export class produccionLecheModule {}