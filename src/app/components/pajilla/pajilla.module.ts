
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { PajillaComponent }    from './pajilla.component';
import { PajillaListComponent }  from './pajilla-list.component';
import { PajillaFormComponent }  from './pajilla-form.component';
import { PajillaFormModal } from './pajilla-form.modal';
import { PajillaRouting } from '../../core/routes/pajilla.routing';

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
    PajillaRouting
  ],
  declarations: [
    PajillaListComponent,
    PajillaFormComponent,
    PajillaFormModal,
    PajillaComponent
  ],
  entryComponents: [PajillaFormModal]
})
export class PajillaModule {}