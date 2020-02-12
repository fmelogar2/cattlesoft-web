
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { reproduccionComponent } from '../../components/reproduccion/reproduccion.component';

import { EventoReproduccionListComponent } from '../../components/reproduccion/evento-reproduccion-list.component';
import { EventoReproduccionFormComponent } from '../../components/reproduccion/evento-reproduccion-form.component';
import { EventoCeloListComponent } from '../../components/reproduccion/evento-celo-list.component';
import { EventoCeloFormComponent } from '../../components/reproduccion/evento-celo-form.component';
const reproduccionRoutes: Routes = [
  { path: 'base',  component: reproduccionComponent },
  { path: 'evento-reproduccion-list', component: EventoReproduccionListComponent },
  { path: 'evento-reproduccion-form', component: EventoReproduccionFormComponent },  
  { path: 'evento-celo-list', component: EventoCeloListComponent },
  { path: 'evento-celo-form', component: EventoCeloFormComponent }  
];

export const reproduccionRouting: ModuleWithProviders = RouterModule.forChild(reproduccionRoutes);