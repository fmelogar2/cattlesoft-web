import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { Animal } from '../../core/domain/animal.domain';
import { AnimalRaza } from '../../core/domain/animal-raza.domain';
import { AnimalRazaMetadata } from '../../core/domain/animal-raza.domain';
import { AnimalRazaDomain } from '../../core/domain/animal-raza.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'animal-raza-list',
  templateUrl: './animal-raza-list.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class AnimalRazaListComponent implements OnInit, OnChanges {

  @Input() animal : Animal;
  private sub: any;
  private animalRazaList : AnimalRaza[];
  private queryParamList: [string, string][] = [['','']];

  private metadata : AnimalRazaMetadata;
  private animalRazaDomain : AnimalRazaDomain = new AnimalRazaDomain();
  private fieldList: Field[];
  private modalDeleteMessage : ConfirmationModalOptions;
  private openGenericSearch : boolean = false;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  
  private selectedAnimalRaza : AnimalRaza;
  
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
  	this.fieldList = this.animalRazaDomain.getSearchListOfFields();
    this.metadata = this.animalRazaDomain.getAnimalRazaMetadata();
	this.getAnimalRazaList();
	this.modalDeleteMessage = new ConfirmationModalOptions('Title',
                                   '¡Esperamos tu confirmación!',
                                   'Eliminar', 'Cancelar', 'icon glyphicon glyphicon-trash', false, false);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.getAnimalRazaList();
    this.selectedAnimalRaza = null;
  }
  
  
  onSelectedAnimalRaza(animalRaza: AnimalRaza){
    this.selectedAnimalRaza = animalRaza;
  }
   
   onAnimalRazaDelete(animalRaza : AnimalRaza) {
    let queryParam : Array<[string, string]> = new Array<[string, string]>();
    queryParam.push(['idAnimal', animalRaza.animalRazaPK.idAnimal.toString()]);
    queryParam.push(['codigoRaza', animalRaza.animalRazaPK.codigoRaza.toString()]);
    queryParam.push(['idHacienda', animalRaza.animalRazaPK.idHacienda.toString()]);
    this.deleteAnimalRaza(queryParam);
  }
   
   getAnimalRazaList() {
	if (this.animal) {
	   	this._spinnerService.show();
	    let serviceProvider : string = 'AnimalRaza';
	    let pathParams : Array<[number, string]> = null;
	    let queryParams : Array<[string, string]> = new Array<[string, string]>();
	    let commonQuery : Array<string> = ["filterBy", "orderBy", "from", "to"];
	    let stringFiltro = "idAnimal="+this.animal.idAnimal;
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
	          .subscribe(result => {this.animalRazaList = result; this._spinnerService.hide(); },
	                       err  => this.cathException('error_' + err)
	          );
	      });
      }
   }
   
   deleteAnimalRaza(queryParam: Array<[string, string]>) {
   	this._spinnerService.show();
    let idResult: any = 0;
    let serviceProvider : string = 'AnimalRaza';
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
    this.getAnimalRazaList();
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
      this.onAnimalRazaDelete($event[1]);
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