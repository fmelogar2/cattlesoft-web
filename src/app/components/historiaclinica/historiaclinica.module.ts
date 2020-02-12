
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { historiaClinicaComponent }    from './historiaclinica.component';
import { EventoSanidadListComponent }  from './evento-sanidad-list.component';
import { EventoSanidadFormComponent }  from './evento-sanidad-form.component';
import { EventoSanidadFormModal } from './evento-sanidad-form.modal';
import { DiagnosticoListComponent }  from './diagnostico-list.component';
import { DiagnosticoFormComponent }  from './diagnostico-form.component';
import { DiagnosticoFormModal } from './diagnostico-form.modal';
import { TratamientoListComponent }  from './tratamiento-list.component';
import { TratamientoFormComponent }  from './tratamiento-form.component';
import { TratamientoFormModal } from './tratamiento-form.modal';
import { historiaClinicaRouting } from '../../core/routes/historiaclinica.routing';

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
    historiaClinicaRouting
  ],
  declarations: [
    EventoSanidadListComponent,
    EventoSanidadFormComponent,
    EventoSanidadFormModal,
    DiagnosticoListComponent,
    DiagnosticoFormComponent,
    DiagnosticoFormModal,
    TratamientoListComponent,
    TratamientoFormComponent,
    TratamientoFormModal,
    historiaClinicaComponent
  ],
  entryComponents: [EventoSanidadFormModal, DiagnosticoFormModal, TratamientoFormModal]
})
export class historiaClinicaModule {}