
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gestionPotreroComponent } from '../../components/gestionpotrero/gestionpotrero.component';

import { PotreroListComponent } from '../../components/gestionpotrero/potrero-list.component';
import { PotreroFormComponent } from '../../components/gestionpotrero/potrero-form.component';
import { EventoPotreroListComponent } from '../../components/gestionpotrero/evento-potrero-list.component';
import { EventoPotreroFormComponent } from '../../components/gestionpotrero/evento-potrero-form.component';
import { EventopotInsumoListComponent } from '../../components/gestionpotrero/eventopot-insumo-list.component';
import { EventopotInsumoFormComponent } from '../../components/gestionpotrero/eventopot-insumo-form.component';
const gestionPotreroRoutes: Routes = [
  { path: 'base',  component: gestionPotreroComponent },
  { path: 'potrero-list', component: PotreroListComponent },
  { path: 'potrero-form', component: PotreroFormComponent },  
  { path: 'evento-potrero-list', component: EventoPotreroListComponent },
  { path: 'evento-potrero-form', component: EventoPotreroFormComponent },  
  { path: 'eventopot-insumo-list', component: EventopotInsumoListComponent },
  { path: 'eventopot-insumo-form', component: EventopotInsumoFormComponent }  
];

export const gestionPotreroRouting: ModuleWithProviders = RouterModule.forChild(gestionPotreroRoutes);