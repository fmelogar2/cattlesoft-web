
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { insumoPotreroComponent } from '../../components/insumopotrero/insumopotrero.component';

import { InsumoPotreroListComponent } from '../../components/insumopotrero/insumo-potrero-list.component';
import { InsumoPotreroFormComponent } from '../../components/insumopotrero/insumo-potrero-form.component';
const insumoPotreroRoutes: Routes = [
  { path: 'base',  component: insumoPotreroComponent },
  { path: 'insumo-potrero-list', component: InsumoPotreroListComponent },
  { path: 'insumo-potrero-form', component: InsumoPotreroFormComponent }  
];

export const insumoPotreroRouting: ModuleWithProviders = RouterModule.forChild(insumoPotreroRoutes);