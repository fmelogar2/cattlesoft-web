
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { gestionPotreroComponent }    from './gestionpotrero.component';
import { PotreroListComponent }  from './potrero-list.component';
import { PotreroFormComponent }  from './potrero-form.component';
import { PotreroFormModal } from './potrero-form.modal';
import { EventoPotreroListComponent }  from './evento-potrero-list.component';
import { EventoPotreroFormComponent }  from './evento-potrero-form.component';
import { EventoPotreroFormModal } from './evento-potrero-form.modal';
import { EventopotInsumoListComponent }  from './eventopot-insumo-list.component';
import { EventopotInsumoFormComponent }  from './eventopot-insumo-form.component';
import { EventopotInsumoFormModal } from './eventopot-insumo-form.modal';
import { gestionPotreroRouting } from '../../core/routes/gestionpotrero.routing';

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
    gestionPotreroRouting
  ],
  declarations: [
    PotreroListComponent,
    PotreroFormComponent,
    PotreroFormModal,
    EventoPotreroListComponent,
    EventoPotreroFormComponent,
    EventoPotreroFormModal,
    EventopotInsumoListComponent,
    EventopotInsumoFormComponent,
    EventopotInsumoFormModal,
    gestionPotreroComponent
  ],
  entryComponents: [PotreroFormModal, EventoPotreroFormModal, EventopotInsumoFormModal]
})
export class gestionPotreroModule {}