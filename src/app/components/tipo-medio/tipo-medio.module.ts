
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { TipoMedioComponent }    from './tipo-medio.component';
import { TipoMedioListComponent }  from './tipo-medio-list.component';
import { TipoMedioFormComponent }  from './tipo-medio-form.component';
import { TipoMedioFormModal } from './tipo-medio-form.modal';
import { TipoMedioRouting } from '../../core/routes/tipo-medio.routing';

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
    TipoMedioRouting
  ],
  declarations: [
    TipoMedioListComponent,
    TipoMedioFormComponent,
    TipoMedioFormModal,
    TipoMedioComponent
  ],
  entryComponents: [TipoMedioFormModal]
})
export class TipoMedioModule {}