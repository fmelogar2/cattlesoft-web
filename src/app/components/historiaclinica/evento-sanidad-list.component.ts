import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { EventoSanidad } from '../../core/domain/evento-sanidad.domain';
import { EventoSanidadMetadata } from '../../core/domain/evento-sanidad.domain';
import { EventoSanidadDomain } from '../../core/domain/evento-sanidad.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'evento-sanidad-list',
  templateUrl: './evento-sanidad-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class EventoSanidadListComponent implements OnInit {

  private sub: any;
  private eventoSanidadList : EventoSanidad[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : EventoSanidadMetadata;
  private eventoSanidadDomain : EventoSanidadDomain = new EventoSanidadDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
	
  private selectedEventoSanidad: EventoSanidad;
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
  	this.fieldList = this.eventoSanidadDomain.getSearchListOfFields();
    this.metadata = this.eventoSanidadDomain.getEventoSanidadMetadata();
	this.getEventoSanidadList(null);
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   'We are waiting for you confirmation !!!',
                                   'Delete', 'Cancel', 'icon glyphicon glyphicon-trash', false, false);
  }

  advancedSearch() {
   if (this.queryParamList !== null && this.queryParamList.length > 0) {
     if (this.queryParamList.length === 1 && this.queryParamList[0][0].length === 0) {
       this.getEventoSanidadList(null);
       this.openGenericSearch = true;
     } else {
       this.getEventoSanidadList(this.queryParamList);
     }
   	 } else {
       this.getEventoSanidadList(null);
     }
   }
   
   onEventoSanidadDelete(eventoSanidad : EventoSanidad) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idAnimal', eventoSanidad.eventoSanidadPK.idAnimal.toString()]);
    queryParam.push(['eventoSanidad', eventoSanidad.eventoSanidadPK.eventoSanidad.toString()]);
    queryParam.push(['fechaConsulta', eventoSanidad.eventoSanidadPK.fechaConsulta.toString()]);
    this.deleteEventoSanidad(queryParam);
  }
  
  onSelectedEventoSanidad(eventoSanidad: EventoSanidad){
    this.selectedEventoSanidad = eventoSanidad;
  }
   
   getEventoSanidadList(queryParamList: [string, string][]) {
   	this._spinnerService.show();
    let serviceProvider : string = 'EventoSanidad';
    let pathParams : Array<[number, string]> = null;
    let queryParams : Array<[string, string]> = new Array<[string, string]>();
    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
    if (queryParamList !== null) {
      for (let queryParam of queryParamList) {
        queryParams.push([queryParam[0], this.uriProvider.encodeURI(queryParam[1])]);
        commonQuery = commonQuery.filter(item => item !== queryParam[0]);
      }
    }
    
    for ( let cq of commonQuery ){
      queryParams.push([cq, this.uriProvider.encodeURI("")]);
    }
    
    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, pathParams, queryParams));
    console.log(uriService);
    this.sub = this.route
      .params
      .subscribe(params => {
        this.genericClientService.get(uriService)
          .subscribe(result => {this.eventoSanidadList = result; this._spinnerService.hide(); },
                       err  => this.cathException('error_' + err)
          );
      });
   }
   
   deleteEventoSanidad(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'EventoSanidad';
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
    this.getEventoSanidadList(null);
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
  onSearchEdit(queryParamList: [string, string][]) {
    console.log(queryParamList);
    this.queryParamList = queryParamList;
  }
  
  ngOnDestroy(): void {
  }
  
  getConfirmationResponse($event : [boolean, any]) {
    if ($event[0]) {
      console.log(JSON.stringify($event));
      this.onEventoSanidadDelete($event[1]);
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