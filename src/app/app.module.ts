import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";


// imports generador crud
import { ChequeoMastitisModule } from './components/chequeo-mastitis/chequeo-mastitis.module';
import { DominioModule } from './components/dominio/dominio.module';
import { EnfermedadModule } from './components/enfermedad/enfermedad.module';
import { HaciendaModule } from './components/hacienda/hacienda.module';
import { LluviaModule } from './components/lluvia/lluvia.module';
import { PajillaModule } from './components/pajilla/pajilla.module';
import { produccionLecheModule } from './components/produccionleche/produccionleche.module';
import { RolModule } from './components/rol/rol.module';
import { TipoMedioModule } from './components/tipo-medio/tipo-medio.module';
import { insumoPotreroModule } from './components/insumopotrero/insumopotrero.module';
import { gananciaPesoModule } from './components/gananciapeso/gananciapeso.module';
import { medicamentoModule } from './components/medicamento/medicamento.module';
import { razaModule } from './components/raza/raza.module';
import { historiaClinicaModule } from './components/historiaclinica/historiaclinica.module';
import { gestionPersonaModule } from './components/gestionpersona/gestionpersona.module';
import { gestionLoteModule } from './components/gestionlote/gestionlote.module';
import { gestionPotreroModule } from './components/gestionpotrero/gestionpotrero.module';
import { gestionAnimalModule } from './components/gestionanimal/gestionanimal.module';
import { reproduccionModule } from './components/reproduccion/reproduccion.module';
import { cargaPotreroModule } from './components/cargapotrero/cargapotrero.module';
import { aforoModule } from './components/aforo/aforo.module';

import { SpinnerService } from './core/util/spinner/spinner.service';
import { ModalService } from './core/util/modal/modal.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    CoreModule,
    SmartadminLayoutModule,
    routing,
    
	ChequeoMastitisModule,
	DominioModule,
	EnfermedadModule,
	HaciendaModule,
	LluviaModule,
	PajillaModule,
	produccionLecheModule,
	RolModule,
	TipoMedioModule,
	insumoPotreroModule,
	gananciaPesoModule,
	medicamentoModule,
	razaModule,
	historiaClinicaModule,
	gestionPersonaModule,
	gestionLoteModule,
	gestionPotreroModule,
	gestionAnimalModule,
	reproduccionModule,
	cargaPotreroModule,
	aforoModule
	
    
    
  ],
  exports: [
  ],
  providers: [
    ModalService,
    SpinnerService,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}