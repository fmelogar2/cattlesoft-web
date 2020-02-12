
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DominioComponent } from '../../components/dominio/dominio.component';

import { DominioListComponent } from '../../components/dominio/dominio-list.component';
import { DominioFormComponent } from '../../components/dominio/dominio-form.component';
const DominioRoutes: Routes = [
  { path: 'base',  component: DominioComponent },
  { path: 'dominio-list', component: DominioListComponent },
  { path: 'dominio-form', component: DominioFormComponent }  
];

export const DominioRouting: ModuleWithProviders = RouterModule.forChild(DominioRoutes);