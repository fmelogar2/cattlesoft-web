
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaciendaComponent } from '../../components/hacienda/hacienda.component';

import { HaciendaListComponent } from '../../components/hacienda/hacienda-list.component';
import { HaciendaFormComponent } from '../../components/hacienda/hacienda-form.component';
const HaciendaRoutes: Routes = [
  { path: 'base',  component: HaciendaComponent },
  { path: 'hacienda-list', component: HaciendaListComponent },
  { path: 'hacienda-form', component: HaciendaFormComponent }  
];

export const HaciendaRouting: ModuleWithProviders = RouterModule.forChild(HaciendaRoutes);