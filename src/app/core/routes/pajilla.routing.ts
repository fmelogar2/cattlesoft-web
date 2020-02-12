
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PajillaComponent } from '../../components/pajilla/pajilla.component';

import { PajillaListComponent } from '../../components/pajilla/pajilla-list.component';
import { PajillaFormComponent } from '../../components/pajilla/pajilla-form.component';
const PajillaRoutes: Routes = [
  { path: 'base',  component: PajillaComponent },
  { path: 'pajilla-list', component: PajillaListComponent },
  { path: 'pajilla-form', component: PajillaFormComponent }  
];

export const PajillaRouting: ModuleWithProviders = RouterModule.forChild(PajillaRoutes);