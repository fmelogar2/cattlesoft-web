import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { Persona } from '../../core/domain/persona.domain';
import { RolAdministrativo } from '../../core/domain/rol-administrativo.domain';
import { RolAdministrativoMetadata } from '../../core/domain/rol-administrativo.domain';
import { RolAdministrativoDomain } from '../../core/domain/rol-administrativo.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'rol-administrativo-list',
  templateUrl: './rol-administrativo-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class RolAdministrativoListComponent implements OnInit, OnChanges {

  @Input() persona : Persona;
  private sub: any;
  private rolAdministrativoList : RolAdministrativo[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : RolAdministrativoMetadata;
  private rolAdministrativoDomain : RolAdministrativoDomain = new RolAdministrativoDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedRolAdministrativo : RolAdministrativo;
  
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
  	this.fieldList = this.rolAdministrativoDomain.getSearchListOfFields();
    this.metadata = this.rolAdministrativoDomain.getRolAdministrativoMetadata();
	this.getRolAdministrativoList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getRolAdministrativoList();
    this.selectedRolAdministrativo = null;
  }
  
  
  onSelectedRolAdministrativo(rolAdministrativo: RolAdministrativo){
    this.selectedRolAdministrativo = rolAdministrativo;
  }
   
   onRolAdministrativoDelete(rolAdministrativo : RolAdministrativo) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['tipoDocumento', rolAdministrativo.rolAdministrativoPK.tipoDocumento.toString()]);
    queryParam.push(['numDocumento', rolAdministrativo.rolAdministrativoPK.numDocumento.toString()]);
    queryParam.push(['idHacienda', rolAdministrativo.rolAdministrativoPK.idHacienda.toString()]);
    queryParam.push(['idRol', rolAdministrativo.rolAdministrativoPK.idRol.toString()]);
    queryParam.push(['fechaInicioRol', rolAdministrativo.rolAdministrativoPK.fechaInicioRol.toString()]);
    this.deleteRolAdministrativo(queryParam);
  }
   
   getRolAdministrativoList() {
	if (this.persona) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'RolAdministrativo';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "tipoDocumento="+this.persona.personaPK.tipoDocumento+"&numDocumento="+this.persona.personaPK.numDocumento;
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
	          .subscribe(result => {this.rolAdministrativoList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteRolAdministrativo(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'RolAdministrativo';
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
    this.getRolAdministrativoList();
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
      this.onRolAdministrativoDelete($event[1]);
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