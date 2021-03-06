
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { RolComponent }    from './rol.component';
import { RolListComponent }  from './rol-list.component';
import { RolFormComponent }  from './rol-form.component';
import { RolFormModal } from './rol-form.modal';
import { RolRouting } from '../../core/routes/rol.routing';

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
    RolRouting
  ],
  declarations: [
    RolListComponent,
    RolFormComponent,
    RolFormModal,
    RolComponent
  ],
  entryComponents: [RolFormModal]
})
export class RolModule {}