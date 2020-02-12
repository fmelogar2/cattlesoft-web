
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gestionAnimalComponent } from '../../components/gestionanimal/gestionanimal.component';

import { AnimalListComponent } from '../../components/gestionanimal/animal-list.component';
import { AnimalFormComponent } from '../../components/gestionanimal/animal-form.component';
import { AnimalRazaListComponent } from '../../components/gestionanimal/animal-raza-list.component';
import { AnimalRazaFormComponent } from '../../components/gestionanimal/animal-raza-form.component';
import { LactanciaListComponent } from '../../components/gestionanimal/lactancia-list.component';
import { LactanciaFormComponent } from '../../components/gestionanimal/lactancia-form.component';
const gestionAnimalRoutes: Routes = [
  { path: 'base',  component: gestionAnimalComponent },
  { path: 'animal-list', component: AnimalListComponent },
  { path: 'animal-form', component: AnimalFormComponent },  
  { path: 'animal-raza-list', component: AnimalRazaListComponent },
  { path: 'animal-raza-form', component: AnimalRazaFormComponent },  
  { path: 'lactancia-list', component: LactanciaListComponent },
  { path: 'lactancia-form', component: LactanciaFormComponent }  
];

export const gestionAnimalRouting: ModuleWithProviders = RouterModule.forChild(gestionAnimalRoutes);