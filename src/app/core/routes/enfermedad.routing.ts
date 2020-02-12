
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfermedadComponent } from '../../components/enfermedad/enfermedad.component';

import { EnfermedadListComponent } from '../../components/enfermedad/enfermedad-list.component';
import { EnfermedadFormComponent } from '../../components/enfermedad/enfermedad-form.component';
const EnfermedadRoutes: Routes = [
  { path: 'base',  component: EnfermedadComponent },
  { path: 'enfermedad-list', component: EnfermedadListComponent },
  { path: 'enfermedad-form', component: EnfermedadFormComponent }  
];

export const EnfermedadRouting: ModuleWithProviders = RouterModule.forChild(EnfermedadRoutes);