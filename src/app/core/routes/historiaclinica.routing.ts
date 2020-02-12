
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { historiaClinicaComponent } from '../../components/historiaclinica/historiaclinica.component';

import { EventoSanidadListComponent } from '../../components/historiaclinica/evento-sanidad-list.component';
import { EventoSanidadFormComponent } from '../../components/historiaclinica/evento-sanidad-form.component';
import { DiagnosticoListComponent } from '../../components/historiaclinica/diagnostico-list.component';
import { DiagnosticoFormComponent } from '../../components/historiaclinica/diagnostico-form.component';
import { TratamientoListComponent } from '../../components/historiaclinica/tratamiento-list.component';
import { TratamientoFormComponent } from '../../components/historiaclinica/tratamiento-form.component';
const historiaClinicaRoutes: Routes = [
  { path: 'base',  component: historiaClinicaComponent },
  { path: 'evento-sanidad-list', component: EventoSanidadListComponent },
  { path: 'evento-sanidad-form', component: EventoSanidadFormComponent },  
  { path: 'diagnostico-list', component: DiagnosticoListComponent },
  { path: 'diagnostico-form', component: DiagnosticoFormComponent },  
  { path: 'tratamiento-list', component: TratamientoListComponent },
  { path: 'tratamiento-form', component: TratamientoFormComponent }  
];

export const historiaClinicaRouting: ModuleWithProviders = RouterModule.forChild(historiaClinicaRoutes);