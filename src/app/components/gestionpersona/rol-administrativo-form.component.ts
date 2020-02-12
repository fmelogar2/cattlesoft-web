import { Component, AfterViewChecked, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UriProvider } from '../../core/service/uri.provider';
import { UriControl } from '../../core/domain/generic.domain';
import { GenericClientService } from '../../core/client/generic-client.service';
import { RolAdministrativo } from '../../core/domain/rol-administrativo.domain';
import { RolAdministrativoPK } from '../../core/domain/rol-administrativo.domain';

import { RolAdministrativoMetadata } from '../../core/domain/rol-administrativo.domain';
import { RolAdministrativoDomain } from '../../core/domain/rol-administrativo.domain';
import { Field } from '../../core/domain/generic.domain';
import { ConfirmationModalOptions } from '../../core/domain/generic.domain';
import { AlertObject } from '../../core/domain/generic.domain';
import { SpinnerService } from '../../core/util/spinner/spinner.service';
import { ModalModule} from "ngx-bootstrap";
import {NotificationService} from "../../shared/utils/notification.service";

@Component({
  selector: 'rol-administrativo-form',
  templateUrl: './rol-administrativo-form.component.html',
  providers:  [UriProvider, GenericClientService]
})
export class RolAdministrativoFormComponent implements AfterViewChecked {
  @Input() rolAdministrativo : RolAdministrativo;
  @ViewChild('rolAdministrativoForm') currentForm: NgForm;
  private sub: any;
  private rolAdministrativoDomain = new RolAdministrativoDomain();
  private isNewRolAdministrativo : boolean = false;
  private metadata : RolAdministrativoMetadata = new RolAdministrativoDomain().getRolAdministrativoMetadata();
  private formErrors : any = this.rolAdministrativoDomain.getFormErrors();
  private validationMessages : any = this.rolAdministrativoDomain.getValidationMessages();
  @Input()padre: any;

  submitted = false;
  active = true;
  rolAdministrativoForm: NgForm;
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
    if (this.rolAdministrativo == null) {
      let rolAdministrativoPK = new RolAdministrativoPK();
      this.rolAdministrativo = new RolAdministrativo(rolAdministrativoPK);
      this.isNewRolAdministrativo = true;
    }
  }
  ngAfterViewChecked() {
    this.formChanged();
  }
  formChanged() {
    if (this.currentForm === this.rolAdministrativoForm) { return; }
    this.rolAdministrativoForm = this.currentForm;
    if (this.rolAdministrativoForm) {
      this.rolAdministrativoForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }
  addRolAdministrativo() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  onSubmit() {
    //this.submitted = true;
    this._spinnerService.show();
    if (this.isNewRolAdministrativo) {
      this.post(this.rolAdministrativo);
    } else {
      this.put(this.rolAdministrativo);
    }
    
    if(this.padre){

      this.padre.close();
    }
  }
  onValueChanged(data?: any) {
    this.modalMessage.disabled = !this.rolAdministrativoForm.form.valid;
    if (!this.rolAdministrativoForm) { return; }
    const form = this.rolAdministrativoForm.form;

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
    let serviceProvider : string = 'RolAdministrativo';
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
    let serviceProvider : string = 'RolAdministrativo';
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