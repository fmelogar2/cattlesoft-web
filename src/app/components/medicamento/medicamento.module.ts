
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { medicamentoComponent }    from './medicamento.component';
import { MedicamentoListComponent }  from './medicamento-list.component';
import { MedicamentoFormComponent }  from './medicamento-form.component';
import { MedicamentoFormModal } from './medicamento-form.modal';
import { PresentacionDosisListComponent }  from './presentacion-dosis-list.component';
import { PresentacionDosisFormComponent }  from './presentacion-dosis-form.component';
import { PresentacionDosisFormModal } from './presentacion-dosis-form.modal';
import { medicamentoRouting } from '../../core/routes/medicamento.routing';

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
    medicamentoRouting
  ],
  declarations: [
    MedicamentoListComponent,
    MedicamentoFormComponent,
    MedicamentoFormModal,
    PresentacionDosisListComponent,
    PresentacionDosisFormComponent,
    PresentacionDosisFormModal,
    medicamentoComponent
  ],
  entryComponents: [MedicamentoFormModal, PresentacionDosisFormModal]
})
export class medicamentoModule {}