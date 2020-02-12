
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gestionLoteComponent } from '../../components/gestionlote/gestionlote.component';

import { AnimalListComponent } from '../../components/gestionlote/animal-list.component';
import { AnimalFormComponent } from '../../components/gestionlote/animal-form.component';
import { LoteListComponent } from '../../components/gestionlote/lote-list.component';
import { LoteFormComponent } from '../../components/gestionlote/lote-form.component';
const gestionLoteRoutes: Routes = [
  { path: 'base',  component: gestionLoteComponent },
  { path: 'animal-list', component: AnimalListComponent },
  { path: 'animal-form', component: AnimalFormComponent },  
  { path: 'lote-list', component: LoteListComponent },
  { path: 'lote-form', component: LoteFormComponent }  
];

export const gestionLoteRouting: ModuleWithProviders = RouterModule.forChild(gestionLoteRoutes);