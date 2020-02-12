
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { gananciaPesoComponent }    from './gananciapeso.component';
import { ProduccionListComponent }  from './produccion-list.component';
import { ProduccionFormComponent }  from './produccion-form.component';
import { ProduccionFormModal } from './produccion-form.modal';
import { gananciaPesoRouting } from '../../core/routes/gananciapeso.routing';

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
    gananciaPesoRouting
  ],
  declarations: [
    ProduccionListComponent,
    ProduccionFormComponent,
    ProduccionFormModal,
    gananciaPesoComponent
  ],
  entryComponents: [ProduccionFormModal]
})
export class gananciaPesoModule {}