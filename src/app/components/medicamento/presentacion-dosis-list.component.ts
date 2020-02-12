import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { Medicamento } from '../../core/domain/medicamento.domain';
import { PresentacionDosis } from '../../core/domain/presentacion-dosis.domain';
import { PresentacionDosisMetadata } from '../../core/domain/presentacion-dosis.domain';
import { PresentacionDosisDomain } from '../../core/domain/presentacion-dosis.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'presentacion-dosis-list',
  templateUrl: './presentacion-dosis-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class PresentacionDosisListComponent implements OnInit, OnChanges {

  @Input() medicamento : Medicamento;
  private sub: any;
  private presentacionDosisList : PresentacionDosis[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : PresentacionDosisMetadata;
  private presentacionDosisDomain : PresentacionDosisDomain = new PresentacionDosisDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedPresentacionDosis : PresentacionDosis;
  
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
  	this.fieldList = this.presentacionDosisDomain.getSearchListOfFields();
    this.metadata = this.presentacionDosisDomain.getPresentacionDosisMetadata();
	this.getPresentacionDosisList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getPresentacionDosisList();
    this.selectedPresentacionDosis = null;
  }
  
  
  onSelectedPresentacionDosis(presentacionDosis: PresentacionDosis){
    this.selectedPresentacionDosis = presentacionDosis;
  }
   
   onPresentacionDosisDelete(presentacionDosis : PresentacionDosis) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idMedicamento', presentacionDosis.presentacionDosisPK.idMedicamento.toString()]);
    queryParam.push(['idPresentacion', presentacionDosis.presentacionDosisPK.idPresentacion.toString()]);
    this.deletePresentacionDosis(queryParam);
  }
   
   getPresentacionDosisList() {
	if (this.medicamento) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'PresentacionDosis';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "idMedicamento="+this.medicamento.idMedicamento;
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
	          .subscribe(result => {this.presentacionDosisList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deletePresentacionDosis(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'PresentacionDosis';
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
    this.getPresentacionDosisList();
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
      this.onPresentacionDosisDelete($event[1]);
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