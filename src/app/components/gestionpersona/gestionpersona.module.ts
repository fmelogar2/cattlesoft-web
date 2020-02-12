
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UtilModule } from '../../core/util/util.module';

import { gestionPersonaComponent }    from './gestionpersona.component';
import { PersonaListComponent }  from './persona-list.component';
import { PersonaFormComponent }  from './persona-form.component';
import { PersonaFormModal } from './persona-form.modal';
import { MedioListComponent }  from './medio-list.component';
import { MedioFormComponent }  from './medio-form.component';
import { MedioFormModal } from './medio-form.modal';
import { RolAdministrativoListComponent }  from './rol-administrativo-list.component';
import { RolAdministrativoFormComponent }  from './rol-administrativo-form.component';
import { RolAdministrativoFormModal } from './rol-administrativo-form.modal';
import { gestionPersonaRouting } from '../../core/routes/gestionpersona.routing';

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
    gestionPersonaRouting
  ],
  declarations: [
    PersonaListComponent,
    PersonaFormComponent,
    PersonaFormModal,
    MedioListComponent,
    MedioFormComponent,
    MedioFormModal,
    RolAdministrativoListComponent,
    RolAdministrativoFormComponent,
    RolAdministrativoFormModal,
    gestionPersonaComponent
  ],
  entryComponents: [PersonaFormModal, MedioFormModal, RolAdministrativoFormModal]
})
export class gestionPersonaModule {}