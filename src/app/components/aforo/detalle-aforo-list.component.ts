import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { Aforo } from '../../core/domain/aforo.domain';
import { DetalleAforo } from '../../core/domain/detalle-aforo.domain';
import { DetalleAforoMetadata } from '../../core/domain/detalle-aforo.domain';
import { DetalleAforoDomain } from '../../core/domain/detalle-aforo.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'detalle-aforo-list',
  templateUrl: './detalle-aforo-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class DetalleAforoListComponent implements OnInit, OnChanges {

  @Input() aforo : Aforo;
  private sub: any;
  private detalleAforoList : DetalleAforo[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : DetalleAforoMetadata;
  private detalleAforoDomain : DetalleAforoDomain = new DetalleAforoDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedDetalleAforo : DetalleAforo;
  
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
  	this.fieldList = this.detalleAforoDomain.getSearchListOfFields();
    this.metadata = this.detalleAforoDomain.getDetalleAforoMetadata();
	this.getDetalleAforoList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getDetalleAforoList();
    this.selectedDetalleAforo = null;
  }
  
  
  onSelectedDetalleAforo(detalleAforo: DetalleAforo){
    this.selectedDetalleAforo = detalleAforo;
  }
   
   onDetalleAforoDelete(detalleAforo : DetalleAforo) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idDetalleAforo', detalleAforo.detalleAforoPK.idDetalleAforo.toString()]);
    queryParam.push(['idPotrero', detalleAforo.detalleAforoPK.idPotrero.toString()]);
    queryParam.push(['idHacienda', detalleAforo.detalleAforoPK.idHacienda.toString()]);
    queryParam.push(['idAforo', detalleAforo.detalleAforoPK.idAforo.toString()]);
    this.deleteDetalleAforo(queryParam);
  }
   
   getDetalleAforoList() {
	if (this.aforo) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'DetalleAforo';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "idPotrero="+this.aforo.aforoPK.idPotrero+"&idHacienda="+this.aforo.aforoPK.idHacienda+"&idAforo="+this.aforo.aforoPK.idAforo;
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
	          .subscribe(result => {this.detalleAforoList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteDetalleAforo(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'DetalleAforo';
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
    this.getDetalleAforoList();
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
      this.onDetalleAforoDelete($event[1]);
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