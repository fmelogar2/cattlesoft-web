
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from '../../components/rol/rol.component';

import { RolListComponent } from '../../components/rol/rol-list.component';
import { RolFormComponent } from '../../components/rol/rol-form.component';
const RolRoutes: Routes = [
  { path: 'base',  component: RolComponent },
  { path: 'rol-list', component: RolListComponent },
  { path: 'rol-form', component: RolFormComponent }  
];

export const RolRouting: ModuleWithProviders = RouterModule.forChild(RolRoutes);