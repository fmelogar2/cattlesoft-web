
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoMedioComponent } from '../../components/tipo-medio/tipo-medio.component';

import { TipoMedioListComponent } from '../../components/tipo-medio/tipo-medio-list.component';
import { TipoMedioFormComponent } from '../../components/tipo-medio/tipo-medio-form.component';
const TipoMedioRoutes: Routes = [
  { path: 'base',  component: TipoMedioComponent },
  { path: 'tipo-medio-list', component: TipoMedioListComponent },
  { path: 'tipo-medio-form', component: TipoMedioFormComponent }  
];

export const TipoMedioRouting: ModuleWithProviders = RouterModule.forChild(TipoMedioRoutes);