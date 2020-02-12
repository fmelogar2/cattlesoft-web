
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { razaComponent }    from './raza.component';
import { RazaListComponent }  from './raza-list.component';
import { RazaFormComponent }  from './raza-form.component';
import { RazaFormModal } from './raza-form.modal';
import { PresentacionDosisListComponent }  from './presentacion-dosis-list.component';
import { PresentacionDosisFormComponent }  from './presentacion-dosis-form.component';
import { PresentacionDosisFormModal } from './presentacion-dosis-form.modal';
import { razaRouting } from '../../core/routes/raza.routing';

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
    razaRouting
  ],
  declarations: [
    RazaListComponent,
    RazaFormComponent,
    RazaFormModal,
    PresentacionDosisListComponent,
    PresentacionDosisFormComponent,
    PresentacionDosisFormModal,
    razaComponent
  ],
  entryComponents: [RazaFormModal, PresentacionDosisFormModal]
})
export class razaModule {}