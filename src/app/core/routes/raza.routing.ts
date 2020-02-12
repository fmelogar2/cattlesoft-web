
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { razaComponent } from '../../components/raza/raza.component';

import { RazaListComponent } from '../../components/raza/raza-list.component';
import { RazaFormComponent } from '../../components/raza/raza-form.component';
import { PresentacionDosisListComponent } from '../../components/raza/presentacion-dosis-list.component';
import { PresentacionDosisFormComponent } from '../../components/raza/presentacion-dosis-form.component';
const razaRoutes: Routes = [
  { path: 'base',  component: razaComponent },
  { path: 'raza-list', component: RazaListComponent },
  { path: 'raza-form', component: RazaFormComponent },  
  { path: 'presentacion-dosis-list', component: PresentacionDosisListComponent },
  { path: 'presentacion-dosis-form', component: PresentacionDosisFormComponent }  
];

export const razaRouting: ModuleWithProviders = RouterModule.forChild(razaRoutes);