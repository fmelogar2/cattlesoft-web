
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { reproduccionComponent }    from './reproduccion.component';
import { EventoReproduccionListComponent }  from './evento-reproduccion-list.component';
import { EventoReproduccionFormComponent }  from './evento-reproduccion-form.component';
import { EventoReproduccionFormModal } from './evento-reproduccion-form.modal';
import { EventoCeloListComponent }  from './evento-celo-list.component';
import { EventoCeloFormComponent }  from './evento-celo-form.component';
import { EventoCeloFormModal } from './evento-celo-form.modal';
import { reproduccionRouting } from '../../core/routes/reproduccion.routing';

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
    reproduccionRouting
  ],
  declarations: [
    EventoReproduccionListComponent,
    EventoReproduccionFormComponent,
    EventoReproduccionFormModal,
    EventoCeloListComponent,
    EventoCeloFormComponent,
    EventoCeloFormModal,
    reproduccionComponent
  ],
  entryComponents: [EventoReproduccionFormModal, EventoCeloFormModal]
})
export class reproduccionModule {}