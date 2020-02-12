
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gestionPersonaComponent } from '../../components/gestionpersona/gestionpersona.component';

import { PersonaListComponent } from '../../components/gestionpersona/persona-list.component';
import { PersonaFormComponent } from '../../components/gestionpersona/persona-form.component';
import { MedioListComponent } from '../../components/gestionpersona/medio-list.component';
import { MedioFormComponent } from '../../components/gestionpersona/medio-form.component';
import { RolAdministrativoListComponent } from '../../components/gestionpersona/rol-administrativo-list.component';
import { RolAdministrativoFormComponent } from '../../components/gestionpersona/rol-administrativo-form.component';
const gestionPersonaRoutes: Routes = [
  { path: 'base',  component: gestionPersonaComponent },
  { path: 'persona-list', component: PersonaListComponent },
  { path: 'persona-form', component: PersonaFormComponent },  
  { path: 'medio-list', component: MedioListComponent },
  { path: 'medio-form', component: MedioFormComponent },  
  { path: 'rol-administrativo-list', component: RolAdministrativoListComponent },
  { path: 'rol-administrativo-form', component: RolAdministrativoFormComponent }  
];

export const gestionPersonaRouting: ModuleWithProviders = RouterModule.forChild(gestionPersonaRoutes);