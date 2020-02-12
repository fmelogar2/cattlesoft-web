import {Component, Input} from '@angular/core';
import {PresentacionDosisFormComponent} from './presentacion-dosis-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'presentacion-dosis-form-modal',
  templateUrl: './presentacion-dosis-form.modal.html'
})
export class PresentacionDosisFormModal {
  @Input() presentacionDosis;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(PresentacionDosisFormComponent, "presentacionDosis", this.presentacionDosis);
  }
}