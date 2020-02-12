
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { insumoPotreroComponent }    from './insumopotrero.component';
import { InsumoPotreroListComponent }  from './insumo-potrero-list.component';
import { InsumoPotreroFormComponent }  from './insumo-potrero-form.component';
import { InsumoPotreroFormModal } from './insumo-potrero-form.modal';
import { insumoPotreroRouting } from '../../core/routes/insumopotrero.routing';

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
    insumoPotreroRouting
  ],
  declarations: [
    InsumoPotreroListComponent,
    InsumoPotreroFormComponent,
    InsumoPotreroFormModal,
    insumoPotreroComponent
  ],
  entryComponents: [InsumoPotreroFormModal]
})
export class insumoPotreroModule {}