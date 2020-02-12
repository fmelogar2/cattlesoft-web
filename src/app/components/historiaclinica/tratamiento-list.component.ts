import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { EventoSanidad } from '../../core/domain/evento-sanidad.domain';
import { Tratamiento } from '../../core/domain/tratamiento.domain';
import { TratamientoMetadata } from '../../core/domain/tratamiento.domain';
import { TratamientoDomain } from '../../core/domain/tratamiento.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'tratamiento-list',
  templateUrl: './tratamiento-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class TratamientoListComponent implements OnInit, OnChanges {

  @Input() eventoSanidad : EventoSanidad;
  private sub: any;
  private tratamientoList : Tratamiento[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : TratamientoMetadata;
  private tratamientoDomain : TratamientoDomain = new TratamientoDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedTratamiento : Tratamiento;
  
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
  	this.fieldList = this.tratamientoDomain.getSearchListOfFields();
    this.metadata = this.tratamientoDomain.getTratamientoMetadata();
	this.getTratamientoList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getTratamientoList();
    this.selectedTratamiento = null;
  }
  
  
  onSelectedTratamiento(tratamiento: Tratamiento){
    this.selectedTratamiento = tratamiento;
  }
   
   onTratamientoDelete(tratamiento : Tratamiento) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['eventoSanidad', tratamiento.tratamientoPK.eventoSanidad.toString()]);
    queryParam.push(['fechaConsulta', tratamiento.tratamientoPK.fechaConsulta.toString()]);
    queryParam.push(['idMedicamento', tratamiento.tratamientoPK.idMedicamento.toString()]);
    queryParam.push(['idAnimal', tratamiento.tratamientoPK.idAnimal.toString()]);
    queryParam.push(['idPresentacion', tratamiento.tratamientoPK.idPresentacion.toString()]);
    this.deleteTratamiento(queryParam);
  }
   
   getTratamientoList() {
	if (this.eventoSanidad) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'Tratamiento';
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
	          .subscribe(result => {this.tratamientoList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteTratamiento(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'Tratamiento';
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
    this.getTratamientoList();
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
      this.onTratamientoDelete($event[1]);
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