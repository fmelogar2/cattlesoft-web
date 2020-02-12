import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: 'app/components/home/home.module#HomeModule',
      },
      {
        path: 'chequeo-mastitis',
        loadChildren: 'app/components/chequeo-mastitis/chequeo-mastitis.module#ChequeoMastitisModule'
      },      {
        path: 'dominio',
        loadChildren: 'app/components/dominio/dominio.module#DominioModule'
      },      {
        path: 'enfermedad',
        loadChildren: 'app/components/enfermedad/enfermedad.module#EnfermedadModule'
      },      {
        path: 'hacienda',
        loadChildren: 'app/components/hacienda/hacienda.module#HaciendaModule'
      },      {
        path: 'lluvia',
        loadChildren: 'app/components/lluvia/lluvia.module#LluviaModule'
      },      {
        path: 'pajilla',
        loadChildren: 'app/components/pajilla/pajilla.module#PajillaModule'
      },      {
        path: 'produccionleche',
        loadChildren: 'app/components/produccionleche/produccionleche.module#produccionLecheModule'
      },      {
        path: 'rol',
        loadChildren: 'app/components/rol/rol.module#RolModule'
      },      {
        path: 'tipo-medio',
        loadChildren: 'app/components/tipo-medio/tipo-medio.module#TipoMedioModule'
      },      {
        path: 'insumopotrero',
        loadChildren: 'app/components/insumopotrero/insumopotrero.module#insumoPotreroModule'
      },      {
        path: 'gananciapeso',
        loadChildren: 'app/components/gananciapeso/gananciapeso.module#gananciaPesoModule'
      },      {
        path: 'medicamento',
        loadChildren: 'app/components/medicamento/medicamento.module#medicamentoModule'
      },      {
        path: 'raza',
        loadChildren: 'app/components/raza/raza.module#razaModule'
      },      {
        path: 'historiaclinica',
        loadChildren: 'app/components/historiaclinica/historiaclinica.module#historiaClinicaModule'
      },      {
        path: 'gestionpersona',
        loadChildren: 'app/components/gestionpersona/gestionpersona.module#gestionPersonaModule'
      },      {
        path: 'gestionlote',
        loadChildren: 'app/components/gestionlote/gestionlote.module#gestionLoteModule'
      },      {
        path: 'gestionpotrero',
        loadChildren: 'app/components/gestionpotrero/gestionpotrero.module#gestionPotreroModule'
      },      {
        path: 'gestionanimal',
        loadChildren: 'app/components/gestionanimal/gestionanimal.module#gestionAnimalModule'
      },      {
        path: 'reproduccion',
        loadChildren: 'app/components/reproduccion/reproduccion.module#reproduccionModule'
      },      {
        path: 'cargapotrero',
        loadChildren: 'app/components/cargapotrero/cargapotrero.module#cargaPotreroModule'
      },      {
        path: 'aforo',
        loadChildren: 'app/components/aforo/aforo.module#aforoModule'
      }    ]
  },

  {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
