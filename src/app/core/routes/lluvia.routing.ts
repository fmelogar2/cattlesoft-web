
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LluviaComponent } from '../../components/lluvia/lluvia.component';

import { LluviaListComponent } from '../../components/lluvia/lluvia-list.component';
import { LluviaFormComponent } from '../../components/lluvia/lluvia-form.component';
const LluviaRoutes: Routes = [
  { path: 'base',  component: LluviaComponent },
  { path: 'lluvia-list', component: LluviaListComponent },
  { path: 'lluvia-form', component: LluviaFormComponent }  
];

export const LluviaRouting: ModuleWithProviders = RouterModule.forChild(LluviaRoutes);