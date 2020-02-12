
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequeoMastitisComponent } from '../../components/chequeo-mastitis/chequeo-mastitis.component';

import { ChequeoMastitisListComponent } from '../../components/chequeo-mastitis/chequeo-mastitis-list.component';
import { ChequeoMastitisFormComponent } from '../../components/chequeo-mastitis/chequeo-mastitis-form.component';
const ChequeoMastitisRoutes: Routes = [
  { path: 'base',  component: ChequeoMastitisComponent },
  { path: 'chequeo-mastitis-list', component: ChequeoMastitisListComponent },
  { path: 'chequeo-mastitis-form', component: ChequeoMastitisFormComponent }  
];

export const ChequeoMastitisRouting: ModuleWithProviders = RouterModule.forChild(ChequeoMastitisRoutes);