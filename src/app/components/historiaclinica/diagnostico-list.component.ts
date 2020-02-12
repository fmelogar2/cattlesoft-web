import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { EventoSanidad } from '../../core/domain/evento-sanidad.domain';
import { Diagnostico } from '../../core/domain/diagnostico.domain';
import { DiagnosticoMetadata } from '../../core/domain/diagnostico.domain';
import { DiagnosticoDomain } from '../../core/domain/diagnostico.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'diagnostico-list',
  templateUrl: './diagnostico-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class DiagnosticoListComponent implements OnInit, OnChanges {

  @Input() eventoSanidad : EventoSanidad;
  private sub: any;
  private diagnosticoList : Diagnostico[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : DiagnosticoMetadata;
  private diagnosticoDomain : DiagnosticoDomain = new DiagnosticoDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedDiagnostico : Diagnostico;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uriProvider: UriProvider,
    private genericClientService: GenericClientService,
    private _spinnerService: SpinnerService,
    private notificationService: NotificationService
    ) {
  }

  ngOnInit(): void {
  	this.fieldList = this.diagnosticoDomain.getSearchListOfFields();
    this.metadata = this.diagnosticoDomain.getDiagnosticoMetadata();
	this.getDiagnosticoList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getDiagnosticoList();
    this.selectedDiagnostico = null;
  }
  
  
  onSelectedDiagnostico(diagnostico: Diagnostico){
    this.selectedDiagnostico = diagnostico;
  }
   
   onDiagnosticoDelete(diagnostico : Diagnostico) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idEnfermedad', diagnostico.diagnosticoPK.idEnfermedad.toString()]);
    queryParam.push(['eventoSanidad', diagnostico.diagnosticoPK.eventoSanidad.toString()]);
    queryParam.push(['fechaConsulta', diagnostico.diagnosticoPK.fechaConsulta.toString()]);
    queryParam.push(['idAnimal', diagnostico.diagnosticoPK.idAnimal.toString()]);
    this.deleteDiagnostico(queryParam);
  }
   
   getDiagnosticoList() {
	if (this.eventoSanidad) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'Diagnostico';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "eventoSanidad="+this.eventoSanidad.eventoSanidadPK.eventoSanidad+"&fechaConsulta="+this.eventoSanidad.eventoSanidadPK.fechaConsulta+"&idAnimal="+this.eventoSanidad.eventoSanidadPK.idAnimal;
	    queryParams.push(['filterBy',this.uriProvider.encodeURI(stringFiltro)]);
	    commonQuery = commonQuery.filter(item => item !== 'filterBy');
	    for (let cq of commonQuery) {
	      queryParams.push([cq, this.uriProvider.encodeURI("")]);
	    }
	    
	    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, pathParams, queryParams));
	    console.log(uriService);
	    this.sub = this.route
	      .params
	      .subscribe(params => {
	        this.genericClientService.get(uriService)
	          .subscribe(result => {this.diagnosticoList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteDiagnostico(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'Diagnostico';
    let pathParams : Array<[number, string]> = null;
    let queryParams : Array<[string, string]> = new Array<[string, string]>();
    if (queryParam !== null) {
      queryParams = queryParam;
    }
    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, pathParams, queryParams));

    this.sub = this.route
      .params
      .subscribe(params => {
        this.genericClientService.delete(uriService)
          .subscribe(result => {idResult = result;
                                this.handleResponse(result); },
                       err  => this.cathException('error_' + err)
          );
      });
  }
  
  handleResponse(response : any) {
  	this._spinnerService.hide();
    this.localAlert = new AlertObject('Successful operation', 'info', true, 10000);
    this.generateAlert();
    this.getDiagnosticoList();
    console.log(response);
  }

  cathException(error: string) {
  	this._spinnerService.hide();
    this.localAlert = new AlertObject('Error on service', 'danger', true, 10000);
    this.generateAlert();
    switch (error) {
      case 'error_401':
        //this.router.navigate(['']);
        break;
      default:
        //this.router.navigate(['']);
    }
  }
  
  ngOnDestroy(): void {
  }
  
  getConfirmationResponse($event : [boolean, any]) {
    if ($event[0]) {
      console.log(JSON.stringify($event));
      this.onDiagnosticoDelete($event[1]);
    }
  }
  
  generateAlert() {
    this.notificationService.smallBox({
      title: "Mensaje",
      content: this.localAlert.message,
      color: this.localAlert.resolveColor() ,
      timeout: this.localAlert.lifetime,
      icon: this.localAlert.resolveIcon()
    });
  }
  
}