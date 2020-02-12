
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { medicamentoComponent } from '../../components/medicamento/medicamento.component';

import { MedicamentoListComponent } from '../../components/medicamento/medicamento-list.component';
import { MedicamentoFormComponent } from '../../components/medicamento/medicamento-form.component';
import { PresentacionDosisListComponent } from '../../components/medicamento/presentacion-dosis-list.component';
import { PresentacionDosisFormComponent } from '../../components/medicamento/presentacion-dosis-form.component';
const medicamentoRoutes: Routes = [
  { path: 'base',  component: medicamentoComponent },
  { path: 'medicamento-list', component: MedicamentoListComponent },
  { path: 'medicamento-form', component: MedicamentoFormComponent },  
  { path: 'presentacion-dosis-list', component: PresentacionDosisListComponent },
  { path: 'presentacion-dosis-form', component: PresentacionDosisFormComponent }  
];

export const medicamentoRouting: ModuleWithProviders = RouterModule.forChild(medicamentoRoutes);