import {Component, Input} from '@angular/core';
import {CargaPotreroFormComponent} from './carga-potrero-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'carga-potrero-form-modal',
  templateUrl: './carga-potrero-form.modal.html'
})
export class CargaPotreroFormModal {
  @Input() cargaPotrero;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(CargaPotreroFormComponent, "cargaPotrero", this.cargaPotrero);
  }
}