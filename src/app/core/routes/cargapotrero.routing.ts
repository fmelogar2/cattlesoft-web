
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { cargaPotreroComponent } from '../../components/cargapotrero/cargapotrero.component';

import { PotreroListComponent } from '../../components/cargapotrero/potrero-list.component';
import { PotreroFormComponent } from '../../components/cargapotrero/potrero-form.component';
import { CargaPotreroListComponent } from '../../components/cargapotrero/carga-potrero-list.component';
import { CargaPotreroFormComponent } from '../../components/cargapotrero/carga-potrero-form.component';
import { LoteListComponent } from '../../components/cargapotrero/lote-list.component';
import { LoteFormComponent } from '../../components/cargapotrero/lote-form.component';
const cargaPotreroRoutes: Routes = [
  { path: 'base',  component: cargaPotreroComponent },
  { path: 'potrero-list', component: PotreroListComponent },
  { path: 'potrero-form', component: PotreroFormComponent },  
  { path: 'carga-potrero-list', component: CargaPotreroListComponent },
  { path: 'carga-potrero-form', component: CargaPotreroFormComponent },  
  { path: 'lote-list', component: LoteListComponent },
  { path: 'lote-form', component: LoteFormComponent }  
];

export const cargaPotreroRouting: ModuleWithProviders = RouterModule.forChild(cargaPotreroRoutes);