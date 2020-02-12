
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { gestionLoteComponent }    from './gestionlote.component';
import { AnimalListComponent }  from './animal-list.component';
import { AnimalFormComponent }  from './animal-form.component';
import { AnimalFormModal } from './animal-form.modal';
import { LoteListComponent }  from './lote-list.component';
import { LoteFormComponent }  from './lote-form.component';
import { LoteFormModal } from './lote-form.modal';
import { gestionLoteRouting } from '../../core/routes/gestionlote.routing';

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
    gestionLoteRouting
  ],
  declarations: [
    AnimalListComponent,
    AnimalFormComponent,
    AnimalFormModal,
    LoteListComponent,
    LoteFormComponent,
    LoteFormModal,
    gestionLoteComponent
  ],
  entryComponents: [AnimalFormModal, LoteFormModal]
})
export class gestionLoteModule {}