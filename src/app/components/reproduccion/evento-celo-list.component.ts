import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { EventoReproduccion } from '../../core/domain/evento-reproduccion.domain';
import { EventoCelo } from '../../core/domain/evento-celo.domain';
import { EventoCeloMetadata } from '../../core/domain/evento-celo.domain';
import { EventoCeloDomain } from '../../core/domain/evento-celo.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'evento-celo-list',
  templateUrl: './evento-celo-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class EventoCeloListComponent implements OnInit, OnChanges {

  @Input() eventoReproduccion : EventoReproduccion;
  private sub: any;
  private eventoCeloList : EventoCelo[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : EventoCeloMetadata;
  private eventoCeloDomain : EventoCeloDomain = new EventoCeloDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedEventoCelo : EventoCelo;
  
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
  	this.fieldList = this.eventoCeloDomain.getSearchListOfFields();
    this.metadata = this.eventoCeloDomain.getEventoCeloMetadata();
	this.getEventoCeloList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getEventoCeloList();
    this.selectedEventoCelo = null;
  }
  
  
  onSelectedEventoCelo(eventoCelo: EventoCelo){
    this.selectedEventoCelo = eventoCelo;
  }
   
   onEventoCeloDelete(eventoCelo : EventoCelo) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idAnimal', eventoCelo.eventoCeloPK.idAnimal.toString()]);
    queryParam.push(['fechaEvento', eventoCelo.eventoCeloPK.fechaEvento.toString()]);
    queryParam.push(['tipoEvento', eventoCelo.eventoCeloPK.tipoEvento.toString()]);
    queryParam.push(['tipoServicio', eventoCelo.eventoCeloPK.tipoServicio.toString()]);
    this.deleteEventoCelo(queryParam);
  }
   
   getEventoCeloList() {
	if (this.eventoReproduccion) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'EventoCelo';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "idAnimal="+this.eventoReproduccion.eventoReproduccionPK.idAnimal+"&fechaEvento="+this.eventoReproduccion.eventoReproduccionPK.fechaEvento+"&tipoEvento="+this.eventoReproduccion.eventoReproduccionPK.tipoEvento;
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
	          .subscribe(result => {this.eventoCeloList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteEventoCelo(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'EventoCelo';
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
    this.getEventoCeloList();
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
      this.onEventoCeloDelete($event[1]);
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