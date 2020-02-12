import { Component, AfterViewChecked, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { EventoReproduccion } from '../../core/domain/evento-reproduccion.domain';
import { EventoReproduccionPK } from '../../core/domain/evento-reproduccion.domain';

import { EventoReproduccionMetadata } from '../../core/domain/evento-reproduccion.domain';
import { EventoReproduccionDomain } from '../../core/domain/evento-reproduccion.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'evento-reproduccion-form',
  templateUrl: './evento-reproduccion-form.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class EventoReproduccionFormComponent implements AfterViewChecked {
  @Input() eventoReproduccion : EventoReproduccion;
  @ViewChild('eventoReproduccionForm') currentForm: NgForm;
  private sub: any;
  private eventoReproduccionDomain = new EventoReproduccionDomain();
  private isNewEventoReproduccion : boolean = false;
  private metadata : EventoReproduccionMetadata = new EventoReproduccionDomain().getEventoReproduccionMetadata();
  private formErrors : any = this.eventoReproduccionDomain.getFormErrors();
  private validationMessages : any = this.eventoReproduccionDomain.getValidationMessages();
  @Input()padre: any;

  submitted = false;
  active = true;
  eventoReproduccionForm: NgForm;
  private localAlert : AlertObject = new AlertObject(null, null, null, 0);
  private modalMessage : ConfirmationModalOptions
    = new ConfirmationModalOptions('Title',
                                    'Esperamos tu confirmación !!!',
                                    'Submit', 'Cancel', null, true, false);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uriProvider: UriProvider,
    private _spinnerService: SpinnerService,
    private genericClientService: GenericClientService,
    private notificationService: NotificationService
    ) {
  }

  ngOnInit(): void {
    if (this.eventoReproduccion == null) {
      let eventoReproduccionPK = new EventoReproduccionPK();
      this.eventoReproduccion = new EventoReproduccion(eventoReproduccionPK);
      this.isNewEventoReproduccion = true;
    }
  }
  ngAfterViewChecked() {
    this.formChanged();
  }
  formChanged() {
    if (this.currentForm === this.eventoReproduccionForm) { return; }
    this.eventoReproduccionForm = this.currentForm;
    if (this.eventoReproduccionForm) {
      this.eventoReproduccionForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }
  addEventoReproduccion() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  onSubmit() {
    //this.submitted = true;
    this._spinnerService.show();
    if (this.isNewEventoReproduccion) {
      this.post(this.eventoReproduccion);
    } else {
      this.put(this.eventoReproduccion);
    }
    
    if(this.padre){

      this.padre.close();
    }
  }
  onValueChanged(data?: any) {
    this.modalMessage.disabled = !this.eventoReproduccionForm.form.valid;
    if (!this.eventoReproduccionForm) { return; }
    const form = this.eventoReproduccionForm.form;

    for (const field in this.formErrors) {
      if (true) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (true) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  

  
  post(request: any) {
    let response : any;
    let serviceProvider : string = 'EventoReproduccion';
    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, null, null));

    this.sub = this.route
      .params
      .subscribe(params => {
        this.genericClientService.post(uriService, request)
          .subscribe(result => {response = result;
                                this.handleResponse(response); },
                       err  => this.cathException('error_' + err)
          );
      });
  }
  
  put(request: any) {
    let response : any;
    let serviceProvider : string = 'EventoReproduccion';
    let uriService = this.uriProvider.getUri(new UriControl(serviceProvider, null, null));
    console.log(uriService);
    console.log(JSON.stringify(request));
    this.sub = this.route
      .params
      .subscribe(params => {
        this.genericClientService.put(uriService, request)
          .subscribe(result => {response = result;
                                this.handleResponse(response); },
                       err  => this.cathException('error_' + err)
          );
      });
  }
  
  handleResponse(response : any) {
    this._spinnerService.hide();
    this.localAlert = new AlertObject('Successful operation', 'success', true, 10000);
    this.generateAlert();
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

  getConfirmationResponse($event : [boolean, any]) {
    if ($event[0]) {
        this.onSubmit();
    } else {
    	document.body.classList.add('modal-open');
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