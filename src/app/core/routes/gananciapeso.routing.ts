
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gananciaPesoComponent } from '../../components/gananciapeso/gananciapeso.component';

import { ProduccionListComponent } from '../../components/gananciapeso/produccion-list.component';
import { ProduccionFormComponent } from '../../components/gananciapeso/produccion-form.component';
const gananciaPesoRoutes: Routes = [
  { path: 'base',  component: gananciaPesoComponent },
  { path: 'produccion-list', component: ProduccionListComponent },
  { path: 'produccion-form', component: ProduccionFormComponent }  
];

export const gananciaPesoRouting: ModuleWithProviders = RouterModule.forChild(gananciaPesoRoutes);