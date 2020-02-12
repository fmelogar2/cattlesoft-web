
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { produccionLecheComponent } from '../../components/produccionleche/produccionleche.component';

import { ProduccionListComponent } from '../../components/produccionleche/produccion-list.component';
import { ProduccionFormComponent } from '../../components/produccionleche/produccion-form.component';
const produccionLecheRoutes: Routes = [
  { path: 'base',  component: produccionLecheComponent },
  { path: 'produccion-list', component: ProduccionListComponent },
  { path: 'produccion-form', component: ProduccionFormComponent }  
];

export const produccionLecheRouting: ModuleWithProviders = RouterModule.forChild(produccionLecheRoutes);