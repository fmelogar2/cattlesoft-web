
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { DominioComponent }    from './dominio.component';
import { DominioListComponent }  from './dominio-list.component';
import { DominioFormComponent }  from './dominio-form.component';
import { DominioFormModal } from './dominio-form.modal';
import { DominioRouting } from '../../core/routes/dominio.routing';

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
    DominioRouting
  ],
  declarations: [
    DominioListComponent,
    DominioFormComponent,
    DominioFormModal,
    DominioComponent
  ],
  entryComponents: [DominioFormModal]
})
export class DominioModule {}