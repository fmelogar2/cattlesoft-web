
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { aforoComponent } from '../../components/aforo/aforo.component';

import { AforoListComponent } from '../../components/aforo/aforo-list.component';
import { AforoFormComponent } from '../../components/aforo/aforo-form.component';
import { DetalleAforoListComponent } from '../../components/aforo/detalle-aforo-list.component';
import { DetalleAforoFormComponent } from '../../components/aforo/detalle-aforo-form.component';
const aforoRoutes: Routes = [
  { path: 'base',  component: aforoComponent },
  { path: 'aforo-list', component: AforoListComponent },
  { path: 'aforo-form', component: AforoFormComponent },  
  { path: 'detalle-aforo-list', component: DetalleAforoListComponent },
  { path: 'detalle-aforo-form', component: DetalleAforoFormComponent }  
];

export const aforoRouting: ModuleWithProviders = RouterModule.forChild(aforoRoutes);