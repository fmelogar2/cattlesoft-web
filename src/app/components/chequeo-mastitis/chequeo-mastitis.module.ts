
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { ChequeoMastitisComponent }    from './chequeo-mastitis.component';
import { ChequeoMastitisListComponent }  from './chequeo-mastitis-list.component';
import { ChequeoMastitisFormComponent }  from './chequeo-mastitis-form.component';
import { ChequeoMastitisFormModal } from './chequeo-mastitis-form.modal';
import { ChequeoMastitisRouting } from '../../core/routes/chequeo-mastitis.routing';

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
    ChequeoMastitisRouting
  ],
  declarations: [
    ChequeoMastitisListComponent,
    ChequeoMastitisFormComponent,
    ChequeoMastitisFormModal,
    ChequeoMastitisComponent
  ],
  entryComponents: [ChequeoMastitisFormModal]
})
export class ChequeoMastitisModule {}