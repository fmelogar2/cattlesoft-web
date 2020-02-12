
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { aforoComponent }    from './aforo.component';
import { AforoListComponent }  from './aforo-list.component';
import { AforoFormComponent }  from './aforo-form.component';
import { AforoFormModal } from './aforo-form.modal';
import { DetalleAforoListComponent }  from './detalle-aforo-list.component';
import { DetalleAforoFormComponent }  from './detalle-aforo-form.component';
import { DetalleAforoFormModal } from './detalle-aforo-form.modal';
import { aforoRouting } from '../../core/routes/aforo.routing';

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
    aforoRouting
  ],
  declarations: [
    AforoListComponent,
    AforoFormComponent,
    AforoFormModal,
    DetalleAforoListComponent,
    DetalleAforoFormComponent,
    DetalleAforoFormModal,
    aforoComponent
  ],
  entryComponents: [AforoFormModal, DetalleAforoFormModal]
})
export class aforoModule {}