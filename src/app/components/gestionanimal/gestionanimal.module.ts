
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { gestionAnimalComponent }    from './gestionanimal.component';
import { AnimalListComponent }  from './animal-list.component';
import { AnimalFormComponent }  from './animal-form.component';
import { AnimalFormModal } from './animal-form.modal';
import { AnimalRazaListComponent }  from './animal-raza-list.component';
import { AnimalRazaFormComponent }  from './animal-raza-form.component';
import { AnimalRazaFormModal } from './animal-raza-form.modal';
import { LactanciaListComponent }  from './lactancia-list.component';
import { LactanciaFormComponent }  from './lactancia-form.component';
import { LactanciaFormModal } from './lactancia-form.modal';
import { gestionAnimalRouting } from '../../core/routes/gestionanimal.routing';

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
    gestionAnimalRouting
  ],
  declarations: [
    AnimalListComponent,
    AnimalFormComponent,
    AnimalFormModal,
    AnimalRazaListComponent,
    AnimalRazaFormComponent,
    AnimalRazaFormModal,
    LactanciaListComponent,
    LactanciaFormComponent,
    LactanciaFormModal,
    gestionAnimalComponent
  ],
  entryComponents: [AnimalFormModal, AnimalRazaFormModal, LactanciaFormModal]
})
export class gestionAnimalModule {}