import {Component, Input} from '@angular/core';
import {ProduccionFormComponent} from './produccion-form.component';
import {ModalService} from '../../core/util/modal/modal.service'

@Component({
  selector: 'produccion-form-modal',
  templateUrl: './produccion-form.modal.html'
})
export class ProduccionFormModal {
  @Input() produccion;
  constructor(private modalService: ModalService) {}
  open() {
    const modalRef = this.modalService.show(ProduccionFormComponent, "produccion", this.produccion);
  }
}