
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { EnfermedadComponent }    from './enfermedad.component';
import { EnfermedadListComponent }  from './enfermedad-list.component';
import { EnfermedadFormComponent }  from './enfermedad-form.component';
import { EnfermedadFormModal } from './enfermedad-form.modal';
import { EnfermedadRouting } from '../../core/routes/enfermedad.routing';

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
    EnfermedadRouting
  ],
  declarations: [
    EnfermedadListComponent,
    EnfermedadFormComponent,
    EnfermedadFormModal,
    EnfermedadComponent
  ],
  entryComponents: [EnfermedadFormModal]
})
export class EnfermedadModule {}