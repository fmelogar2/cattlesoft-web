
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { LluviaComponent }    from './lluvia.component';
import { LluviaListComponent }  from './lluvia-list.component';
import { LluviaFormComponent }  from './lluvia-form.component';
import { LluviaFormModal } from './lluvia-form.modal';
import { LluviaRouting } from '../../core/routes/lluvia.routing';

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
    LluviaRouting
  ],
  declarations: [
    LluviaListComponent,
    LluviaFormComponent,
    LluviaFormModal,
    LluviaComponent
  ],
  entryComponents: [LluviaFormModal]
})
export class LluviaModule {}