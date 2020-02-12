
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { cargaPotreroComponent }    from './cargapotrero.component';
import { PotreroListComponent }  from './potrero-list.component';
import { PotreroFormComponent }  from './potrero-form.component';
import { PotreroFormModal } from './potrero-form.modal';
import { CargaPotreroListComponent }  from './carga-potrero-list.component';
import { CargaPotreroFormComponent }  from './carga-potrero-form.component';
import { CargaPotreroFormModal } from './carga-potrero-form.modal';
import { LoteListComponent }  from './lote-list.component';
import { LoteFormComponent }  from './lote-form.component';
import { LoteFormModal } from './lote-form.modal';
import { cargaPotreroRouting } from '../../core/routes/cargapotrero.routing';

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
    cargaPotreroRouting
  ],
  declarations: [
    PotreroListComponent,
    PotreroFormComponent,
    PotreroFormModal,
    CargaPotreroListComponent,
    CargaPotreroFormComponent,
    CargaPotreroFormModal,
    LoteListComponent,
    LoteFormComponent,
    LoteFormModal,
    cargaPotreroComponent
  ],
  entryComponents: [PotreroFormModal, CargaPotreroFormModal, LoteFormModal]
})
export class cargaPotreroModule {}