
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { HaciendaComponent }    from './hacienda.component';
import { HaciendaListComponent }  from './hacienda-list.component';
import { HaciendaFormComponent }  from './hacienda-form.component';
import { HaciendaFormModal } from './hacienda-form.modal';
import { HaciendaRouting } from '../../core/routes/hacienda.routing';

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
    HaciendaRouting
  ],
  declarations: [
    HaciendaListComponent,
    HaciendaFormComponent,
    HaciendaFormModal,
    HaciendaComponent
  ],
  entryComponents: [HaciendaFormModal]
})
export class HaciendaModule {}